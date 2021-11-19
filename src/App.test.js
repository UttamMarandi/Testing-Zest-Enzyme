import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
//.childAt(0) removes the topmost wrapper of App component
//.dive() gets the contents of the component rather than only giving the higher order component
//all this can be ckecked using console.log(wrapper.debug())
describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text",
        },
        {
          title: "Example title 2",
          body: "Some text",
        },
        {
          title: "Example title 3",
          body: "Some text",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = wrapper.find(`[data-test="appComponent"]`);
    expect(component.length).toBe(1);
  });

  it("exampleMethod_updatesState Method should update state as expected", () => {
    const classInstance = wrapper.instance(); //create an instance of the class
    classInstance.exampleMethod_updatesState();
    //fire the method
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsAValue Method should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    //we are passing value 6, our function increments the number ,so we are expecting 7
    expect(newValue).toBe(7);
  });
});
