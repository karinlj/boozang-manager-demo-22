<template>
  <div class="main-container">
    <section class="subheader">
      <div class="container-small">
        <h1>Manage your Boozang projects here</h1>
      </div>
    </section>
    <main>
      <!-- <header> -->
      <!-- access the argument passed in filterChange with $event -->
      <!-- <FilterNav @filterChange="current = $event" :current="current" />
    </header> -->

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
    </main>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
//import FilterNav from "../components/FilterNav.vue";
import getProjects from "../composables/getProjects";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ProjectsList },
  setup() {
    const { projects, error, load } = getProjects();
    // const current = ref("all");
    // const search = ref("");

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

    // const matchingProjects = computed(() => {
    //   //filter out
    //   return projects.value.filter((item) => {
    //     //check if search term is in project
    //     return item.title.includes(search.value); //match(search.value);
    //   });
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
      // search,
      // filteredProjects,
      // matchingProjects,
      handleDelete,
      handleComplete,
    };
  },
};
</script>

<style lang="scss">
.main-container {
  padding-top: 3.5rem;
}
.subheader {
  background: $lightestGrey;
  padding: 2.5rem $sectionPadding;
  h1 {
    font-size: 1.8rem;
    color: $textColor;
  }
}
main {
  padding-bottom: 3rem;
  min-height: 800px;
  .btn {
    margin: 2.5rem 0;
  }
  h2 {
    display: inline-block;
    padding-bottom: 0.8rem;
    //border-bottom: 3px solid rgba(27, 40, 74, 0.4);
    border-bottom: 2px solid $borderColor;
  }
  .container-small {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
