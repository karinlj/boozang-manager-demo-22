<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title" />

    <label>Details: </label>
    <textarea required v-model="details"></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  name: "EditProject",
  props: ["id"],
  data() {
    return {
      details: "",
      title: "",
      uri: "http://localhost:9000/projects/" + this.id,
    };
  },
  mounted() {
    //get this project from db
    fetch(this.uri)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("get project data", data);
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    //edit project
    handleSubmit() {
      console.log("project to be edited", this.title);
      fetch(this.uri, {
        method: "PATCH", //update
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, details: this.details }), //send only the edited data in a string made from js-object
      })
        .then(() => {
          //update locally this project
          this.$router.push("/");
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
