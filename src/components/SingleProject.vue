<template>
  <div class="project_item" :class="{ complete: project.complete }">
    <!--  dynamic class: class complete if project.complete=true -->
    <div class="project_actions">
      <button
        @click="this.showDetails = !this.showDetails"
        class="show_details_btn"
        title="More details"
        aria-label="More details"
        :aria-expanded="[showDetails]"
      >
        <span>
          {{ project.title }}
        </span>
      </button>
      <div class="icons">
        <!-- pass in project.id to route -->
        <router-link
          :to="{ name: 'EditProject', params: { id: project.id } }"
          :aria-label="' Open project: ' + project.title"
        >
          <span
            class="material-icons edit"
            aria-hidden="true"
            title="Open project"
          >
            edit
          </span>
        </router-link>
        <button
          class="material-icons delete"
          @click="deleteProject"
          title="Delete"
          aria-label="Delete project"
        >
          delete
        </button>
        <button
          class="material-icons tick"
          @click="toggleComplete"
          title="Toggle complete"
          aria-label="Toggle complete on project"
        >
          done
        </button>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "SingleProject",
  props: ["project"],

  setup(props, context) {
    const showDetails = ref(false);
    // uri to this project in db.json
    const uri = ref("http://localhost:9000/projects/" + props.project.id);

    const deleteProject = () => {
      //delete from db.json
      fetch(uri.value, { method: "DELETE" })
        .then(() => {
          //delete locally this project
          context.emit("delete", props.project.id);
        })
        .catch((err) => console.log(err.message));
    };

    const toggleComplete = () => {
      fetch(uri.value, {
        method: "PATCH", //update
        headers: { "Content-Type": "application/json" }, //sending json-data
        body: JSON.stringify({ complete: !props.project.complete }), //sending the data in a string made from js-object
      })
        .then(() => {
          //update locally this project
          context.emit("complete", props.project.id);
        })
        .catch((err) => console.log(err.message));
    };
    return {
      showDetails,
      uri,
      deleteProject,
      toggleComplete,
    };
  },
};
</script>

<style lang="scss">
.project_item {
  margin: 1rem auto;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid $color_red; // not complete color
  &.complete {
    border-color: $color_green;
    .tick {
      color: $color_green;
    }
  }
  h3 {
    cursor: pointer;
  }
  .project_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .show_details_btn {
      span {
        display: block;
        font-size: 1.1rem;
        color: $color_gray_medium;
        font-weight: bold;
        padding: 0.8rem 0;
      }
    }
    button {
      display: inline;
      background: transparent;
      border: none;
      padding: 3px;
      &:hover {
        filter: brightness(200%);
      }
    }
  }
  .material-icons {
    font-size: 1.3rem;
    margin-left: 0.5rem;
    color: $color_gray_medium;
    cursor: pointer;
    &.edit {
      &:hover {
        color: $color_green;
      }
    }
    &.delete {
      color: $color_red_light;
      cursor: default;
    }
    &.tick {
      cursor: default;
    }
  }
}
</style>
