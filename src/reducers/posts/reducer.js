import { types } from "../../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS: //if we are receiving types.GET_POSTS
      return action.payload;
    default:
      return state; //by default empty array , return initial state
  }
};

//reducer are switch case statements(basically)
