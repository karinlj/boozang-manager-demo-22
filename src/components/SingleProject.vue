<template>
  <div class="project_item divided" :class="color">
    <header class="header">
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
          <button
            class="icon_btn right"
            title="edit"
            aria-label="Edit project"
            @click="toggleEditModal"
          >
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
    </header>
    <div class="body">
      <a
        href=""
        class="title"
        aria-label="Launch Boozang tool"
        title="Launch tool"
      >
        <i class="fas fa-play-circle"></i>
        <span> {{ project.title }}</span>
      </a>
    </div>
    <!--  dynamic class: class complete if project.complete=true    :class="{ complete: project.complete }" -->
    <!-- 
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
   -->
    <footer>
      <ul class="props">
        <li>
          <p>
            Last modified <strong>{{ project.updated }}</strong>
            <strong> days</strong> ago by
            <strong>{{ project.by }}</strong>
          </p>
        </li>
      </ul>
    </footer>

    <div v-if="showEditModal">
      <Modal :project="project" @closing="toggleEditModal">
        <h1>Edit Project</h1>

        <template v-slot:editForm>
          <form @submit.prevent="handleEditSubmit">
            <div class="input-section">
              <label
                >Title: <input type="text" required v-model="project.title" />
              </label>
              <label
                >Details:
                <textarea required v-model="project.details"></textarea>
              </label>
            </div>
            <div class="btn-section">
              <button type="submit" class="submit-btn">Update Project</button>
              <!-- ej button -->
              <button type="button" class="cancel-link">Cancel</button>
            </div>
          </form>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Modal from "./Modal.vue";

export default {
  name: "SingleProject",
  props: ["project", "color"],
  components: { Modal },

  setup(props, context) {
    const showDetails = ref(false);
    const showEditModal = ref(false);

    // uri to this project in db.json
    const uri = ref("http://localhost:9000/projects/" + props.project.id);

    const toggleEditModal = () => {
      console.log("toggle edit");
      showEditModal.value = !showEditModal.value;
    };

    const handleEditSubmit = () => {
      console.log(" edit form");
    };

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
      showEditModal,
      toggleEditModal,
      handleEditSubmit,
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
  //divided with white
  &.divided {
    padding: 0px;
    box-shadow: $themeBoxShadow;
    .header {
      padding: 1.1rem 1.4rem;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      span {
        font-weight: 600;
        font-size: 0.9rem;
        margin-left: 1px;
      }
    }
    .body {
      padding: 1rem 1.4rem;
      a.title {
        color: $darkBlue;
        font-weight: 700;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        white-space: normal;
        transition: all 0.2s ease-in;
        i.fa-play-circle {
          font-size: 1.5rem;
          padding-right: 0.5rem;
          color: #fff;
          transition: all 0.2s ease-in;
        }
        span {
          line-height: 1.2;
          &:hover {
            // text-decoration: underline;
          }
        }
        &:hover {
          text-decoration: none;
          opacity: 1;
          color: $linkColor;
          i.fa-play-circle {
            color: $linkColor;
          }
        }
      }
    }
    footer {
      background: #fff;
      border: none;
      padding: 1.1rem 1.4rem;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      .props {
        li {
          font-size: 0.8rem;
          p {
            line-height: 18px;
          }
        }
      }
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
  .icons {
    display: flex;
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
      margin-left: 0.4rem;
    }
    &.team {
      cursor: text;
    }
  }

  //gammalt
  &.complete {
    border-color: $color_green;
    .tick {
      color: $color_green;
    }
  }
}
</style>
