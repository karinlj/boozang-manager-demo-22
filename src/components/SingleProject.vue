<template>
  <!-- <div class="project_item divided" :class="color"> -->
  <a
    href="#"
    class="project_item"
    :class="color"
    aria-label="Launch Boozang tool"
  >
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

        <div class="icons-right">
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
            @click="toggleDeleteModal"
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
      <h3 class="title">{{ project.title }}</h3>
    </div>
    <!--  dynamic class: class complete if project.complete=true    :class="{ complete: project.complete }" -->

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

    <!-- edit -->
    <div v-if="showEditModal">
      <Modal :project="project" @closing="toggleEditModal">
        <h1>Edit Project</h1>

        <template v-slot:editForm>
          <!-- <form @submit.prevent="editProject"> -->
          <form>
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
              <button type="submit" class="submit-btn" @click="editProject">
                Update Project
              </button>
              <button
                type="button"
                class="cancel-link"
                @click="toggleEditModal"
              >
                Cancel
              </button>
            </div>
          </form>
        </template>
      </Modal>
    </div>
    <!-- delete -->
    <div v-if="showDeleteModal">
      <Modal @closing="toggleDeleteModal">
        <h1>Delete Project</h1>
        <template v-slot:deleteConferm>
          <p>Are you sure you want to delete the project?</p>

          <div class="btn-section">
            <button type="submit" class="submit-btn" @click="deleteProject">
              Yes
            </button>
            <!-- ej button -->
            <button
              type="button"
              class="cancel-link"
              @click="toggleDeleteModal"
            >
              Cancel
            </button>
          </div>
        </template>
      </Modal>
    </div>
  </a>
  <!-- </div> -->
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Modal from "./Modal.vue";
import updateProject from "../composables/updateProject";

export default {
  name: "SingleProject",
  props: ["project", "color"],
  components: { Modal },

  setup(props, context) {
    const showDetails = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);

    const uri = ref("http://localhost:9000/projects/" + props.project.id);

    //edit
    const toggleEditModal = () => {
      showEditModal.value = !showEditModal.value;
    };
    const editProject = () => {
      const { update } = updateProject(
        props.project.id,
        props.project.title,
        props.project.details
      );
      update();
      toggleEditModal();
    };

    //delete
    const toggleDeleteModal = () => {
      //console.log("toggle delete");
      showDeleteModal.value = !showDeleteModal.value;
    };
    const deleteProject = () => {
      //delete from db.json
      fetch(uri.value, { method: "DELETE" })
        .then(() => {
          //delete locally this project
          context.emit("delete", props.project.id);
        })
        .catch((err) => console.log(err.message));
      toggleDeleteModal();
    };

    // const toggleComplete = () => {
    //   fetch(uri.value, {
    //     method: "PATCH", //update
    //     headers: { "Content-Type": "application/json" }, //sending json-data
    //     body: JSON.stringify({ complete: !props.project.complete }), //sending the data in a string made from js-object
    //   })
    //     .then(() => {
    //       //update locally this project
    //       context.emit("complete", props.project.id);
    //     })
    //     .catch((err) => console.log(err.message));
    // };
    return {
      showDetails,
      uri,
      deleteProject,
      // toggleComplete,
      showEditModal,
      toggleEditModal,
      showDeleteModal,
      toggleDeleteModal,
      editProject,
    };
  },
};
</script>

<style lang="scss">
.project_item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: $themeBorderRadius;
  padding: 0px;
  box-shadow: $themeBoxShadowLight;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  color: $textColor;
  transition: all 0.3s ease-in;

  .header {
    padding: 1rem 1.4rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    span {
      font-weight: 600;
      font-size: 0.9rem;
      margin-left: 1px;
    }
  }
  .body {
    padding: 0 1.4rem;
    .title {
      margin: 0;
      margin-top: -1rem;
      color: $darkBlue;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      white-space: normal;
    }
  }
  footer {
    background: #fff;
    border: none;
    padding: 1rem 1.4rem;
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
  .icons-extended {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 600;
      font-size: 0.9rem;
    }
    .icon_btn {
      border: none;
      background: transparent;
      color: $textColor;
      padding: 5px;
      position: relative;
      z-index: 2;
      &.right {
        margin-left: 0.4rem;
      }
      &.team {
        cursor: text;
      }
    }
  }
  .icons-right {
    display: flex;
    opacity: 0;
    transition: all 0.3s ease-in;
  }
  &:hover {
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: brightness(92%);
      border-radius: $themeBorderRadius;
    }
    .icons-right {
      opacity: 1;
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

  //gammalt
  &.complete {
    border-color: $green;
    .tick {
      color: $green;
    }
  }
}
</style>
