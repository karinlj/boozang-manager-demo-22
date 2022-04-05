const { ref } = require("vue");

const addProject = (newProject) => {
  const addError = ref(null);

  const add = async () => {
    try {
      //fetch data
      let data = await fetch("http://localhost:9000/projectss/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        //what I post as json-format
        body: JSON.stringify(newProject), //sending project object
      });
      if (!data.ok) {
        throw Error("No data available");
      }
      console.log("added data: ", data);
    } catch (err) {
      addError.value = err.message;
      console.log("Error: ", addError.value);
    }
  };
  return { addError, add };
};
export default addProject;
