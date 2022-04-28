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
export default {
  name: "ProjectsList",
  components: { SingleProject },
  props: ["projects"],

  methods: {
    handleDelete(id) {
      this.$emit("delete", id);
    },
    handleComplete(id) {
      this.$emit("complete", id);
    },
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
