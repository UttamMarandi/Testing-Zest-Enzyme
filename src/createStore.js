import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

export const middlewares = [ReduxThunk]; //redux thunk is a milddleware

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(rootReducer);

// export const store = createStore(rootReducer);

//reducers are pure functions. Two types pure and inpure functions
//pure functions meaning the function will return a new state.
//reducer should not have any complex logic.
//you should only take the payload and return a new state.
