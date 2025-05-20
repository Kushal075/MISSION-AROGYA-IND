import { combineReducers } from "redux";

// Sample reducer to prevent "Store does not have a valid reducer" error
const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return { ...state, message: "Redux is working!" };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sample: sampleReducer, // Add actual reducers here
});

export default rootReducer;
