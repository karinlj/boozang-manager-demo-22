<template>
  <ul class="project-list">
    <li>
      <button
        class="add-project"
        aria-label="Add Project"
        @click="toggleAddModal"
      >
        <i class="fas fa-solid fa-plus add_icon" aria-hidden="true"></i>
      </button>
    </li>
    <li v-for="(project, index) in projects" :key="project">
      <!-- project from the loop -->
      <SingleProject
        :project="project"
        :color="colors[index % 4]"
        @delete="handleDelete"
      />
      <!--  @complete="handleComplete" -->
    </li>
  </ul>
  <!-- add -->
  <div v-if="showAddModal">
    <Modal @closing="toggleAddModal">
      <h1>Add new Project</h1>
      <template v-slot:addForm>
        <form>
          <div class="input-section">
            <label
              >Title: <input type="text" required v-model="title" />
            </label>
          </div>
          <div class="btn-section">
            <button type="submit" class="submit-btn" @click="addNewProject">
              Add Project
            </button>
            <button type="button" class="cancel-link" @click="toggleAddModal">
              Cancel
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

import addProject from "../composables/addProject";
// import { computed } from "@vue/runtime-core";

export default {
  name: "ProjectsList",
  components: { SingleProject, Modal },
  props: ["projects"],

  setup(props, context) {
    const colors = ref(["blue", "green", "pink", "yellow"]);
    const title = ref("");
    const showAddModal = ref(false);

    const toggleAddModal = () => {
      console.log("toggleAddModal");
      showAddModal.value = !showAddModal.value;
    };

    const addNewProject = async () => {
      console.log("add");

      //make project object
      let newProject = {
        title: title.value,
      };
      //add to db
      const { add } = addProject(newProject);
      await add();
    };

    const handleDelete = (id) => {
      context.emit("delete", id);
    };
    // const handleComplete = (id) => {
    //   context.emit("complete", id);
    // };
    return {
      handleDelete,
      // handleComplete,
      colors,
      title,
      addNewProject,
      showAddModal,
      toggleAddModal,
    };
  },
};
</script>

<style lang="scss">
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
}
button.add-project {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: $themeBorderRadius;
  box-shadow: $themeBoxShadowLight;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  background: transparent;
  border: dashed 2px $borderColor !important;
  transition: all 0.3s ease-in;

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
    // .add_icon {
    //   opacity: 1;
    // }
  }
}
</style>
