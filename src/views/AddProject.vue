<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title" />

    <label>Details: </label>
    <textarea required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return {
      details: "",
      title: "",
    };
  },
  methods: {
    //adding project
    handleSubmit() {
      console.log("submit", this.title, this.details);
      //make project object
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch("http://localhost:9000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //sending json-data
        body: JSON.stringify(project), //sending project object
      })
        .then(() => {
          this.$router.push("/"); //redirect to home
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 2rem;
  border-radius: 10px;
  background: white;
  label {
    color: #bbb;
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
