<template>
  <form @submit.prevent="handleSubmit">
    <label>Title: <input type="text" required v-model="title" /> </label>
    <label>Details: <textarea required v-model="details"></textarea></label>

    <button>Add Project</button>
  </form>
</template>

<script>
import addProject from "../composables/addProject";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "AddProject",
  setup() {
    const router = useRouter();
    const details = ref("");
    const title = ref("");

    const handleSubmit = async () => {
      //  console.log("submit", title.value, details.value);
      //make project object
      let project = {
        title: title.value,
        details: details.value,
        complete: false,
      };
      const { add } = addProject(project);
      await add();

      await router.push("/");
    };

    return {
      handleSubmit,
      details,
      title,
    };
  },
};
</script>

<style lang="scss" scoped>
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
    padding: 0.5rem;
    margin-top: 1rem;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    //color: #444;
  }
  textarea {
    height: 100px;
    border: 1px solid #ddd;
  }
  button {
    display: block;
    background: #00ce89;
    border: 0;
    padding: 0.5rem 1rem;
    margin: 1rem auto 0;
    color: white;
    border-radius: 1rem;
    font-size: 1rem;
  }
}
</style>
