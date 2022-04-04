<template>
  <p v-if="error">{{ error }}</p>
  <section v-if="project">
    <form @submit.prevent="handleSubmit">
      <label
        >Title: <input type="text" required v-model="project.title" />
      </label>

      <label
        >Details: <textarea required v-model="project.details"></textarea>
      </label>
      <button>Update Project</button>
    </form>
  </section>
</template>

<script>
import getProject from "../composables/getProject";
import { useRouter } from "vue-router";
import updateProject from "../composables/updateProject";
export default {
  name: "EditProject",
  props: ["id"],
  setup(props) {
    const { project, error, load } = getProject(props.id);
    const router = useRouter();
    load();

    const handleSubmit = () => {
      //console.log("project to be edited", project.value.title);
      const { update } = updateProject(
        props.id,
        project.value.title,
        project.value.details
      );
      update();

      router.push("/");
    };
    return {
      handleSubmit,
      project,
      error,
      load,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

form {
  padding: 2rem;
  border-radius: 10px;
  background: white;
  label {
    color: $color_gray_darker;
    display: block;
    margin: 2rem 0 1rem 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input,
  textarea {
    padding: 1.5rem 0.5rem;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid $color_gray;
    //color: #444;
  }
  textarea {
    height: 100px;
    border: 1px solid $color_gray;
  }
  button {
    display: block;
    background: $color_green;
    border: 0;
    padding: 0.5rem 1rem;
    margin: 1rem auto 0;
    color: white;
    border-radius: 1rem;
    font-size: 1rem;
  }
}
</style>
