const initialState = {
    message: "Redux is working!",
  };
  
  const dummyReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default dummyReducer;
  