<template>
  <ul class="project-list">
    <li>
      <button
        class="add-project"
        title="Add"
        aria-label="Add Project"
        @click="addProject"
      >
        <i class="fas fa-solid fa-plus add_icon" aria-hidden="true"></i>
      </button>
    </li>
    <li v-for="(project, index) in projects" :key="project">
      <!-- take project from the loop -->
      <SingleProject
        :project="project"
        :color="colors[index % 4]"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </li>
  </ul>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import { ref } from "@vue/reactivity";
// import { computed } from "@vue/runtime-core";

export default {
  name: "ProjectsList",
  components: { SingleProject },
  props: ["projects"],

  setup(props, context) {
    const colors = ref(["blue", "green", "pink", "yellow"]);

    const handleDelete = (id) => {
      context.emit("delete", id);
    };
    const handleComplete = (id) => {
      context.emit("complete", id);
    };

    const addProject = () => {
      console.log("add");
    };
    return {
      handleDelete,
      handleComplete,
      addProject,
      colors,
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: $themeBorderRadius;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  background: transparent;
  border: dashed 2px $borderColor !important;

  .add_icon {
    color: $textColorDark;
    font-size: 1.7rem;
  }
}
</style>
