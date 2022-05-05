<template>
  <main>
    <!-- <header> -->
    <!-- access the argument passed in filterChange with $event -->
    <!-- <FilterNav @filterChange="current = $event" :current="current" />
    </header> -->
    <SubHeader :theme="subheaderTheme">
      <template v-slot:subheaderItems>
        <div>
          <h1>Need help getting started?</h1>
          <p>
            Hit the ground running with a free <br />consultation with our
            automation experts.
          </p>
        </div>
        <a href="https://calendly.com/boozang/boozang-demo" class="btn-link"
          >Book now</a
        >
      </template>
    </SubHeader>

    <section class="projects">
      <div class="container-small">
        <h2>Mats Ljunggrens projects</h2>

        <p v-if="error">{{ error }}</p>
        <section v-if="projects.length">
          <ProjectsList
            :projects="projects"
            @delete="handleDelete"
            @complete="handleComplete"
          />
        </section>
        <p v-else>... Loading</p>
      </div>
    </section>
  </main>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
//import FilterNav from "../components/FilterNav.vue";
import getProjects from "../composables/getProjects";
import SubHeader from "../components/SubHeader.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ProjectsList, SubHeader },
  setup() {
    const { projects, error, load } = getProjects();
    // const current = ref("all");
    const subheaderTheme = ref("home");

    load();

    //computed
    // const filteredProjects = computed(() => {
    //   //evaluate the value of current wich have 3 possibilities
    //   if (current.value === "completed") {
    //     return projects.value.filter((item) => {
    //       return item.complete;
    //     });
    //   } else if (current.value === "ongoing") {
    //     return projects.value.filter((item) => {
    //       return !item.complete;
    //     });
    //   }
    //   return projects.value;
    // });

    const handleDelete = (id) => {
      projects.value = projects.value.filter((item) => {
        return item.id !== id;
      });
    };
    const handleComplete = (id) => {
      let project = projects.value.find((item) => {
        return item.id === id;
      });
      project.complete = !project.complete;
    };

    return {
      projects,
      error,
      load,
      // current,
      // filteredProjects,
      handleDelete,
      handleComplete,
      subheaderTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 3rem;
  min-height: 800px;
  .projects {
    padding: 2rem $sectionPadding;
  }
}
</style>
