import { checkPropTypes } from "prop-types";

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
