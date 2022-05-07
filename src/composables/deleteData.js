const { ref } = require("vue");

const deleteData = (id) => {
  const deleteError = ref(null);

  const deleteItem = async () => {
    try {
      //fetch data
      let data = await fetch("http://localhost:9000/projects/" + id, {
        method: "DELETE",
      });

      if (!data.ok) {
        throw Error("No data available");
      }
      // console.log("delete data", data);
    } catch (err) {
      deleteError.value = err.message;
      console.log("Error: ", deleteError.value);
    }
  };
  return {
    deleteError,
    deleteItem,
  };
};
export default deleteData;
