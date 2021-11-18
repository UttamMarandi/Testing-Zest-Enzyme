import { combineReducers } from "redux";
import successReducer from "./successReducer";
import postsReducer from "./posts/reducer";

export default combineReducers({
  successReducer,
  postsReducer,
});
