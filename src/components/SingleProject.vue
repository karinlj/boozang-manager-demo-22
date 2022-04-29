<template>
  <div class="project_item divided" :class="color">
    <div class="upper-part">
      <div class="icons-extended">
        <div>
          <i
            class="fas fa-user-friends icon_btn team"
            aria-hidden="true"
            title="team members"
          ></i>
          <span>3</span>
        </div>

        <div class="icons">
          <button class="icon_btn right" title="edit" aria-label="Edit project">
            <i class="fas fa-pencil-alt edit_icon" aria-hidden="true"></i>
          </button>
          <button
            class="icon_btn right"
            title="delete"
            aria-label="Delete project"
          >
            <i class="fas fa-trash-alt delete_icon" aria-hidden="true"></i>
          </button>
          <button
            class="icon_btn right"
            title="favourite"
            aria-label="Favourite project"
          >
            <i class="far fa-star star_icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <ul class="props">
        <li>
          <p>
            Updated {{ project.updated }} days ago by
            {{ project.by }}
          </p>
        </li>
      </ul>
    </div>
    <!--  dynamic class: class complete if project.complete=true    :class="{ complete: project.complete }" -->

    <!-- <div class="icons">
      <router-link
        :to="{ name: 'EditProject', params: { id: project.id } }"
        :aria-label="' Open project: ' + project.title"
      >
        <span
          class="material-icons edit"
          aria-hidden="true"
          title="Open project"
        >
          edit
        </span>
      </router-link>
      <button
        class="material-icons delete"
        @click="deleteProject"
        title="Delete"
        aria-label="Delete project"
      >
        delete
      </button>
      <button
        class="material-icons tick"
        @click="toggleComplete"
        title="Toggle complete"
        aria-label="Toggle complete on project"
      >
        done
      </button>
    </div> -->

    <footer>
      <a
        href=""
        class="title"
        aria-label="Launch Boozang tool"
        title="Launch tool"
      >
        {{ project.title }}
      </a>
    </footer>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "SingleProject",
  props: ["project", "color"],

  setup(props, context) {
    const showDetails = ref(false);
    // uri to this project in db.json
    const uri = ref("http://localhost:9000/projects/" + props.project.id);

    const deleteProject = () => {
      //delete from db.json
      fetch(uri.value, { method: "DELETE" })
        .then(() => {
          //delete locally this project
          context.emit("delete", props.project.id);
        })
        .catch((err) => console.log(err.message));
    };

    const toggleComplete = () => {
      fetch(uri.value, {
        method: "PATCH", //update
        headers: { "Content-Type": "application/json" }, //sending json-data
        body: JSON.stringify({ complete: !props.project.complete }), //sending the data in a string made from js-object
      })
        .then(() => {
          //update locally this project
          context.emit("complete", props.project.id);
        })
        .catch((err) => console.log(err.message));
    };
    return {
      showDetails,
      uri,
      deleteProject,
      toggleComplete,
    };
  },
};
</script>

<style lang="scss">
.project_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem 1.4rem 1rem 1.4rem;
  border-radius: $themeBorderRadius;
  box-shadow: $themeBoxShadowLight;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  color: $textColorDark;
  &.divided {
    padding: 0px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    .upper-part {
      padding: 1.4rem 1.4rem 1rem;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      .props {
        margin-top: 2rem;
      }
      span {
        font-weight: 600;
        font-size: 0.9rem;
        margin-left: 1px;
      }
    }
    footer {
      background: #fff;
      border: none;
      padding: 1rem 1.4rem;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
  &.pink {
    background: $colorPink;
  }
  &.blue {
    background: $lightblue;
  }
  &.green {
    background: $green;
  }
  &.yellow {
    background: $yellow;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .icons-extended {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 600;
      font-size: 0.9rem;
    }
  }
  .icon_btn {
    border: none;
    background: transparent;
    color: $textColorDark;
    padding: 5px;
    &.right {
      margin-left: 0.9rem;
    }
    &.team {
      cursor: text;
    }
  }
  .props {
    li {
      font-size: 0.95rem;
      padding: 3px 0;
      line-height: 22px;
    }
  }
  footer {
    background: transparent;
    // text-align: center;
    padding: 0.7rem 0 0 0;
    border-top: 1px solid $darkBlue;
    .title {
      color: $darkBlue;
      font-weight: 700;
      font-size: 1.1rem;
    }
  }

  &.complete {
    border-color: $color_green;
    .tick {
      color: $color_green;
    }
  }
  h3 {
    cursor: pointer;
  }
  .project_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .show_details_btn {
      span {
        display: block;
        font-size: 1.1rem;
        color: $color_gray_medium;
        font-weight: bold;
        padding: 0.8rem 0;
      }
    }
    button {
      display: inline;
      background: transparent;
      border: none;
      padding: 3px;
      &:hover {
        filter: brightness(200%);
      }
    }
  }
  .material-icons {
    font-size: 1.3rem;
    margin-left: 0.5rem;
    color: $color_gray_medium;
    cursor: pointer;
    &.edit {
      &:hover {
        color: $color_green;
      }
    }
    &.delete {
      color: $color_red_light;
      cursor: default;
    }
    &.tick {
      cursor: default;
    }
  }
}
</style>
