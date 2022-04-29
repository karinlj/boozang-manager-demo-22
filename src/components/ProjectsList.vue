<template>
  <ul class="project-list">
    <li v-for="project in projects" :key="project">
      <!-- take project from the loop -->
      <SingleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </li>
  </ul>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
// import { ref } from "@vue/reactivity";
// import { computed } from "@vue/runtime-core";

export default {
  name: "ProjectsList",
  components: { SingleProject },
  props: ["projects"],

  setup(props, context) {
    const handleDelete = (id) => {
      context.emit("delete", id);
    };
    const handleComplete = (id) => {
      context.emit("complete", id);
    };

    return {
      handleDelete,
      handleComplete,
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
</style>
