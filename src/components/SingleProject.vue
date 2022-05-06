<template>
  <!-- <div class="project_item divided" :class="color"> -->
  <a
    href="#"
    class="project_item"
    :class="color"
    aria-label="Launch Boozang tool"
  >
    <header class="header">
      <div class="icons-extended">
        <div>
          <i
            class="fas fa-user-friends icon_btn team"
            aria-hidden="true"
            title="team members"
          ></i>
          <span>3</span>
        </div>

        <div class="icons-right">
          <button
            class="icon_btn right"
            title="edit"
            aria-label="Edit project"
            @click="toggleEditModal"
          >
            <i class="fas fa-pencil-alt edit_icon" aria-hidden="true"></i>
          </button>
          <button
            class="icon_btn right"
            title="delete"
            aria-label="Delete project"
          >
            <i class="fas fa-trash-alt delete_icon" aria-hidden="true"></i>
          </button>
          <button
            class="icon_btn right"
            title="favourite"
            aria-label="Favourite project"
          >
            <i class="far fa-star star_icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
    <div class="body">
      <h3 class="title">{{ project.title }}</h3>
    </div>
    <!--  dynamic class: class complete if project.complete=true    :class="{ complete: project.complete }" -->
    <!-- 
      <router-link
        :to="{ name: 'EditProject', params: { id: project.id } }"
        :aria-label="' Open project: ' + project.title"
      >
      </router-link>
   -->
    <footer>
      <ul class="props">
        <li>
          <p>
            Last modified <strong>{{ project.updated }}</strong>
            <strong> days</strong> ago by
            <strong>{{ project.by }}</strong>
          </p>
        </li>
      </ul>
    </footer>

    <div v-if="showEditModal">
      <Modal :project="project" @closing="toggleEditModal">
        <h1>Edit Project</h1>

        <template v-slot:editForm>
          <form @submit.prevent="handleEditSubmit">
            <div class="input-section">
              <label
                >Title: <input type="text" required v-model="project.title" />
              </label>
              <label
                >Details:
                <textarea required v-model="project.details"></textarea>
              </label>
            </div>
            <div class="btn-section">
              <button type="submit" class="submit-btn">Update Project</button>
              <!-- ej button -->
              <button type="button" class="cancel-link">Cancel</button>
            </div>
          </form>
        </template>
      </Modal>
    </div>
  </a>
  <!-- </div> -->
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Modal from "./Modal.vue";

export default {
  name: "SingleProject",
  props: ["project", "color"],
  components: { Modal },

  setup(props, context) {
    const showDetails = ref(false);
    const showEditModal = ref(false);

    // uri to this project in db.json
    const uri = ref("http://localhost:9000/projects/" + props.project.id);

    const toggleEditModal = () => {
      console.log("toggle edit");
      showEditModal.value = !showEditModal.value;
    };

    const handleEditSubmit = () => {
      console.log(" edit form");
    };

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
      showEditModal,
      toggleEditModal,
      handleEditSubmit,
    };
  },
};
</script>

<style lang="scss">
.project_item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: $themeBorderRadius;
  padding: 0px;
  box-shadow: $themeBoxShadow;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  height: 14rem;
  width: 17rem;
  color: $textColorDark;
  transition: all 0.3s ease-in;

  .header {
    padding: 1rem 1.4rem;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    span {
      font-weight: 600;
      font-size: 0.9rem;
      margin-left: 1px;
    }
  }
  .body {
    padding: 0 1.4rem;
    .title {
      margin: 0;
      margin-top: -1rem;
      color: $darkBlue;
      font-weight: 700;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      white-space: normal;
    }
  }
  footer {
    background: #fff;
    border: none;
    padding: 1rem 1.4rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    .props {
      li {
        font-size: 0.8rem;
        p {
          line-height: 18px;
        }
      }
    }
  }
  .icons-extended {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 600;
      font-size: 0.9rem;
    }
    .icon_btn {
      border: none;
      background: transparent;
      color: $textColorDark;
      padding: 5px;
      position: relative;
      z-index: 2;
      &.right {
        margin-left: 0.4rem;
      }
      &.team {
        cursor: text;
      }
    }
  }
  .icons-right {
    display: flex;
    opacity: 0;
    transition: all 0.3s ease-in;
  }
  &:hover {
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: brightness(97%);
      border-radius: $themeBorderRadius;
    }
    .icons-right {
      opacity: 1;
    }
  }
  &.pink {
    background: $colorPink;
  }
  &.blue {
    background: $lightblue;
  }
  &.green {
    background: $green;
  }
  &.yellow {
    background: $yellow;
  }

  //gammalt
  &.complete {
    border-color: $color_green;
    .tick {
      color: $color_green;
    }
  }
}
</style>
