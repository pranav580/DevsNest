const Add = (item) => {
    return {
      type: "ADD",
      payload: item,
    };
  };
  export default Add;
  const Done = (id) => {
    return {
      type: "DONE",
      payload: id,
    };
  };
  
  const Delete = (item) => {
    return {
      type: "DELETE",
      payload: item,
    };
  };
  
  export { Done, Delete };