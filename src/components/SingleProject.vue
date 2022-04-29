<template>
  <div class="project_item">
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

    <div class="icons-extended">
      <button class="icon_btn" title="team" aria-label="team number">
        <i class="fas fa-user-friends" aria-hidden="true"></i>
        <span>3</span>
      </button>
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
        <p>Updated 4 days ago</p>
      </li>
    </ul>
    <footer>
      <span class="title">
        {{ project.title }}
      </span>
    </footer>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "SingleProject",
  props: ["project"],

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
  // margin: 1rem auto;
  // background: white;
  // padding: 0.5rem 1rem;
  // border-radius: 4px;
  // box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  // border-left: 4px solid $color_red; // not complete color
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem 1.4rem 1rem 1.4rem;
  border-radius: $themeBorderRadius;
  box-shadow: $themeBoxShadowLight;
  margin-right: 1rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  color: $textColorDark;
  &:nth-of-type(1) {
    // background: $lightestGrey;
    // border: dashed 2px $lightGrey;
    background: $lightblue;
  }
  &:nth-of-type(2) {
    background: $lightblue;
  }
  &:nth-of-type(3) {
    background: $green;
  }
  &:nth-of-type(4) {
    background: $colorPink;
    background: $yellow;
  }
  &:nth-of-type(5) {
    background: $colorPink;
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
    padding-right: 0;
    &.right {
      margin-left: 1rem;
    }
  }

  .props {
    li {
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
