<template>
  <main>
    <!-- <header> -->
    <!-- access the argument passed in filterChange with $event -->
    <!-- <FilterNav @filterChange="current = $event" :current="current" />
    </header> -->
    <div class="main-container">
      <section class="subheader">
        <div class="container-small">
          <div>
            <h1>Need help getting started?</h1>
            <p>
              Hit the ground running with a free <br />consultation with our
              automation experts.
            </p>
          </div>

          <button>Book now</button>
        </div>
      </section>
    </div>
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
main {
  padding-bottom: 3rem;
  min-height: 800px;
  .btn {
    margin: 2.5rem 0;
  }
  h2 {
    display: inline-block;
    margin-top: 2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid $lightestBlue;
  }
  .container-small {
    max-width: 1000px;
    margin: 0 auto;
  }
  .subheader {
    background: $blue;
    padding: 3.8rem $sectionPadding;
    color: #fff;
    background-image: url("../assets/mgm_banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    > .container-small {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      font-size: 1.8rem;
      color: #fff;
      margin-top: 0;
    }
    p {
      line-height: 1.3;
    }
    button {
      padding: 0.8rem 1.2rem;
      font-size: 1rem;
      color: $blue;
      background: #fff;
    }
  }
}
</style>
