<template>
  <div class="home">
    <!-- access the argument passed in filterChange with $event -->
    <header>
      <!-- <FilterNav @filterChange="current = $event" :current="current" /> -->
      <FilterNav @filterChange="filterChange" :current="current" />

      <input type="text" v-model="search" />
      <!-- <p>search term {{ search }}</p> -->
    </header>

    <div v-if="projects.length">
      <ProjectsList
        :projects="filteredProjects"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import FilterNav from "../components/FilterNav.vue";
// @ is an alias to /src

export default {
  name: "Home old",
  components: { ProjectsList, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
      search: "",
    };
  },
  computed: {
    filteredProjects() {
      //evaluate the value of current wich have 3 possibilities
      if (this.current === "completed") {
        return this.projects.filter((item) => {
          return item.complete;
        });
      } else if (this.current === "ongoing") {
        return this.projects.filter((item) => {
          return !item.complete;
        });
      }
      return this.projects;
    },
    matchingProjects() {
      //filter out
      return this.projects.filter((item) => {
        //check if search term is in project
        return item.title.includes(this.search); //match(this.search);
      });
    },
  },
  methods: {
    filterChange($event) {
      this.current = $event;
    },
    handleDelete(id) {
      this.projects = this.projects.filter((item) => {
        return item.id !== id;
      });
    },
    handleComplete(id) {
      let project = this.projects.find((item) => {
        return item.id === id;
      });
      console.log("updated project", project);
      project.complete = !project.complete;
    },
  },
  mounted() {
    fetch("http://localhost:9000/projects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log("fetch data", data);
        this.projects = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>
<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: enter;
  input {
    padding: 0.5rem;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
</style>
