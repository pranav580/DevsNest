const Reducer = (state = [], action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
  
      case "DELETE":
        return state.filter((item, index) => index !== action.payload);
  
      case "DONE":
        var newState = [...state];
        newState[action.payload.index] = action.payload;
        return newState;
  
      default:
        return state;
    }
  };
  
  export default Reducer;