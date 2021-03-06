import { checkPropTypes } from "prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers/rootReducer";
import { middlewares } from "../src/createStore";

export const findByTestAttr = (component, attr) => {
  let wrapper;
  wrapper = component.find(`[data-test = '${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
