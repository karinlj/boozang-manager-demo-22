<template>
  <ul class="project-list">
    <li class="project-list-item">
      <button
        class="add-project"
        aria-label="Add Project"
        @click="toggleAddModal"
      >
        <i class="fas fa-solid fa-plus add_icon" aria-hidden="true"></i>
      </button>
    </li>
    <li
      class="project-list-item"
      v-for="(project, index) in projects"
      :key="project"
    >
      <!-- project from the loop -->
      <SingleProject
        :project="project"
        :color="colors[index % 4]"
        @delete="handleDelete"
      />
    </li>
  </ul>
  <!-- add -->
  <div v-if="showAddModal">
    <Modal @closing="toggleAddModal">
      <h1>New Project</h1>
      <p>Stay organized with a dedicated workspace for your software tests.</p>
      <template v-slot:addForm>
        <form @submit.prevent="handleAddNew">
          <div class="input-section">
            <label aria-label="Project name"
              >Project name
              <input type="text" required v-model="title" />
            </label>
          </div>
          <div class="btn-section">
            <button type="button" class="cancel-link" @click="toggleAddModal">
              Cancel
            </button>
            <button type="submit" class="submit-btn" :disabled="title === ''">
              Create Project
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import { ref } from "@vue/reactivity";
import Modal from "./Modal.vue";

import addData from "../composables/addData";
import { computed } from "@vue/runtime-core";

export default {
  name: "ProjectsList",
  components: { SingleProject, Modal },
  props: ["projects"],
  emits: ["delete", "add"],

  setup(props, context) {
    const colors = ref(["blue", "green", "pink", "yellow"]);
    const title = ref("");
    const showAddModal = ref(false);

    const inputContent = computed(() => {
      let inputFilled;
      if (title.value !== "") {
        inputFilled = true;
      }
      return inputFilled;
    });

    const toggleAddModal = () => {
      showAddModal.value = !showAddModal.value;
    };

    const handleAddNew = async () => {
      //make project object
      let newProject = {
        title: title.value,
      };
      // console.log("adding newProject:", newProject);
      //add to db
      const { add } = addData(newProject);
      await add();
      //add locally
      context.emit("add", newProject);
      toggleAddModal();
      title.value = "";
    };

    const handleDelete = (id) => {
      context.emit("delete", id);
    };
    return {
      handleDelete,
      colors,
      title,
      handleAddNew,
      showAddModal,
      toggleAddModal,
      inputContent,
    };
  },
};
</script>

<style lang="scss">
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-right: -15px;
  margin-left: -15px;
  .project-list-item {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 15px;
    @media all and (min-width: $sm-min) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media all and (min-width: $lg-min) {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    @media all and (min-width: $xxl-min) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
}
.add-project {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: $themeBorderRadius;
  box-shadow: $themeBoxShadow;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 16rem;
  width: 100%;
  background: transparent;
  border: dashed 2px $borderColor !important;
  transition: all 0.3s ease-in;
  @media all and (min-width: $lg-min) {
    height: 16rem;
  }
  @media all and (min-width: $xxl-min) {
    height: 17rem;
  }
  .add_icon {
    color: $textColor;
    font-size: 1.7rem;
    // opacity: 0.8;
    transition: all 0.3s ease-in;
  }
  &:hover {
    filter: none;
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
  }
}
</style>
