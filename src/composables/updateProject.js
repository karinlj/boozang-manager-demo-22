const { ref } = require("vue");

const updateProject = (id, title, details) => {
  const updateError = ref(null);

  const update = async () => {
    try {
      //fetch data
      let data = await fetch("http://localhost:9000/projects/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        //what I post as json-format
        body: JSON.stringify({ title: title, details: details }),
      });
      if (!data.ok) {
        throw Error("No data available");
      }
      console.log("updated data: ", data);
    } catch (err) {
      updateError.value = err.message;
      console.log("Error: ", updateError.value);
    }
  };
  return { updateError, update };
};
export default updateProject;
