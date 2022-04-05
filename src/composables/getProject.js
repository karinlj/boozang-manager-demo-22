const { ref } = require("vue");

const getProject = (id) => {
  const project = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      //fetch data
      let data = await fetch("http://localhost:9000/projects/" + id);
      if (!data.ok) {
        throw Error("No data available");
      }
      //make json object
      project.value = await data.json();
      //  console.log("project: ", project.value);
    } catch (err) {
      error.value = err.message;
      console.log("Error: ", error.value);
    }
  };
  return { project, error, load };
};
export default getProject;
