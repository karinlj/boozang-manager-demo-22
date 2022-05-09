<template>
  <a href="#" class="project-item" aria-label="Launch Boozang tool">
    <div class="project-item-wrapper" :class="color">
      <header class="header">
        <div class="icons-extended">
          <div>
            <i
              class="fas fa-user-friends icon_btn team"
              aria-hidden="true"
              title="team members"
            ></i>
            <span>{{ project.team }}</span>
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
        <h3 class="title">{{ project.name }}</h3>
      </div>
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
    </div>

    <!-- edit -->
    <div v-if="showEditModal">
      <Modal :project="project" @closing="toggleEditModal">
        <h1>Edit Project</h1>

        <template v-slot:editForm>
          <form @submit.prevent="handleEdit">
            <div class="input-section">
              <label
                >Project name
                <input type="text" required v-model="project.name" />
              </label>
              <label
                >Description
                <textarea required v-model="project.description"></textarea>
              </label>
            </div>
            <div class="checkbox-section">
              <input type="checkbox" v-model="project.isPublic" />
              <label>Public project </label>
            </div>

            <div class="btn-section">
              <button
                type="button"
                class="cancel-link"
                @click="toggleEditModal"
              >
                Cancel
              </button>
              <button class="submit-btn">Save</button>
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
          <p>Are you sure you want to delete this project?</p>
          <p>
            You will lose access to all tests and modules contained in the
            project. This action cannot be undone.
          </p>

          <div class="btn-section">
            <button
              type="button"
              class="cancel-link"
              @click="toggleDeleteModal"
            >
              Cancel
            </button>
            <button type="submit" class="delete-btn" @click="handleDelete">
              Delete
            </button>
          </div>
        </template>
      </Modal>
    </div>
  </a>
</template>

<script>
import { ref } from "@vue/reactivity";
//import { computed } from "@vue/runtime-core";
import Modal from "./Modal.vue";
import updateData from "../composables/updateData";
import deleteData from "../composables/deleteData";

export default {
  name: "SingleProject",
  props: ["project", "color"],
  components: { Modal },

  setup(props, context) {
    const showComment = ref(false);
    const showEditModal = ref(false);
    const showDeleteModal = ref(false);

    //edit
    const toggleEditModal = () => {
      showEditModal.value = !showEditModal.value;
    };
    const handleEdit = async () => {
      //upd project
      const { update } = updateData(
        props.project.id,
        props.project.name,
        props.project.description,
        props.project.isPublic
      );
      await update();
      toggleEditModal();
    };

    //delete
    const toggleDeleteModal = () => {
      showDeleteModal.value = !showDeleteModal.value;
    };
    const handleDelete = async () => {
      //delete from db.json
      const { deleteItem } = deleteData(props.project.id);
      await deleteItem();
      //The keyword await before a function makes the function wait for a promise:
      //let value = await promise; The await keyword can only be used inside an async function.

      //delete locally
      context.emit("delete", props.project.id);
      toggleDeleteModal();
    };

    return {
      showComment,
      handleDelete,
      showEditModal,
      toggleEditModal,
      showDeleteModal,
      toggleDeleteModal,
      handleEdit,
    };
  },
};
</script>

<style lang="scss">
.project-item {
  .project-item-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: $themeBorderRadius;
    height: 16rem;
    width: 100%;
    color: $textColor;
    transition: all 0.3s ease-in;
    margin-bottom: 2rem;

    @media all and (min-width: $lg-min) {
      height: 16rem;
    }
    @media all and (min-width: $xxl-min) {
      height: 17rem;
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
    &:hover {
      text-decoration: none;
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
      .icons-right {
        opacity: 1;
      }
    }
  }
  .header {
    padding: 1.3rem 1.6rem;
    border-top-left-radius: $themeBorderRadius;
    border-top-right-radius: $themeBorderRadius;
    span {
      font-weight: 600;
      font-size: 1rem;
      margin-left: 3px;
    }
  }
  .body {
    padding: 0 1.6rem;
    .title {
      margin: 0;
      margin-top: -1rem;
      color: $darkBlue;
      font-weight: 700;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      white-space: normal;
    }
  }
  footer {
    background: $superLightGrey;
    border: none;
    padding: 1.3rem 1.6rem;
    border-bottom-left-radius: $themeBorderRadius;
    border-bottom-right-radius: $themeBorderRadius;
    .props {
      li {
        font-size: 0.9rem;
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
        margin-left: 0.5rem;
      }
      &.team {
        cursor: text;
      }
      &:hover {
        background-image: none !important;
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
  }
}
</style>
