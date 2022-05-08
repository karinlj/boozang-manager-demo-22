<template>
  <main>
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
      <div class="container">
        <h2>Mats Ljunggrens projects</h2>

        <p v-if="error">{{ error }}</p>
        <section v-if="projects.length">
          <ProjectsList
            :projects="projects"
            @delete="handleDelete"
            @add="handleAdd"
          />
        </section>
        <p v-else>... Loading</p>
      </div>
    </section>
  </main>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import getData from "../composables/getData";
import SubHeader from "../components/SubHeader.vue";
import { ref } from "@vue/reactivity";
//import { computed } from "@vue/runtime-core";
// @ is an alias to /src

export default {
  name: "Home",
  components: { ProjectsList, SubHeader },
  emits: ["delete", "add"],
  setup() {
    const { projects, error, load } = getData();
    const subheaderTheme = ref("home");
    load();

    //add locally
    const handleAdd = (newProject) => {
      projects.value = [newProject, ...projects.value];
    };
    //delete locally
    const handleDelete = (id) => {
      projects.value = projects.value.filter((item) => {
        return item.id !== id;
      });
    };

    return {
      projects,
      error,
      load,
      subheaderTheme,
      handleDelete,
      handleAdd,
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
