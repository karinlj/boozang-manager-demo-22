<template>
  <section class="home">
    <!-- access the argument passed in filterChange with $event -->
    <header>
      <FilterNav @filterChange="current = $event" :current="current" />
      <!-- <input type="text" v-model="search" /> -->
      <!-- <p>search term {{ search }}</p> -->
    </header>
    <p v-if="error">{{ error }}</p>
    <section v-if="projects.length">
      <ProjectsList
        :projects="filteredProjects"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </section>
    <p v-else>... Loading</p>
  </section>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import FilterNav from "../components/FilterNav.vue";
import getProjects from "../composables/getProjects";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ProjectsList, FilterNav },
  setup() {
    const { projects, error, load } = getProjects();
    const current = ref("all");
    const search = ref("");

    load();

    //computed
    const filteredProjects = computed(() => {
      //evaluate the value of current wich have 3 possibilities
      if (current.value === "completed") {
        return projects.value.filter((item) => {
          return item.complete;
        });
      } else if (current.value === "ongoing") {
        return projects.value.filter((item) => {
          return !item.complete;
        });
      }
      return projects.value;
    });

    // const matchingProjects = computed(() => {
    //   //filter out
    //   return projects.value.filter((item) => {
    //     //check if search term is in project
    //     return item.title.includes(search.value); //match(search.value);
    //   });
    // });
    //methods
    const handleDelete = (id) => {
      console.log("deleted project", id);

      projects.value = projects.value.filter((item) => {
        return item.id !== id;
      });
    };
    const handleComplete = (id) => {
      let project = projects.value.find((item) => {
        return item.id === id;
      });
      // console.log("updated project", project);
      project.complete = !project.complete;
    };

    return {
      projects,
      error,
      load,
      current,
      search,
      filteredProjects,
      // matchingProjects,
      handleDelete,
      handleComplete,
    };
  },
};
</script>
<style lang="scss"></style>
