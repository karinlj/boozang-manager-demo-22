const { ref } = require("vue");

const getData = () => {
  const projects = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //fetch data
      let data = await fetch("http://localhost:9000/projects");
      if (!data.ok) {
        throw Error("No data available");
      }
      //make json object
      projects.value = await data.json();
      console.log("get data: ", data);
    } catch (err) {
      error.value = err.message;
      console.log("Error: ", error.value);
    }
  };
  return { projects, error, load };
};
export default getData;
