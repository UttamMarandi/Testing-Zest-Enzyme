export const findByTestAttr = (component, attr) => {
  let wrapper;
  wrapper = component.find(`[data-test = '${attr}']`);
  return wrapper;
};
