import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// to combine reducers
export default combineReducers({
  form: formReducer
});
