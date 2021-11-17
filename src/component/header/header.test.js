import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../Utils";
import Header from "./index";

const setUp = () => {
  const item = shallow(<Header />);
  return item;
};

//refactor code : DRY
//code not working

//enzyme provides two methods test() and it(), both do the same job
//we can have nested describe functions
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    //this method runs below defined code for each it(). It helps to write DRY code
    //it runs before each test
    component = setUp();
  });

  it("Should render without errors", () => {
    const component = shallow(<Header />);
    // console.log(component.debug());

    console.log("componentv2", component);
    // const wrapper = findByTestAttr(component, "header");
    const wrapper = component.find(`[data-test="header"]`);
    expect(wrapper.length).toBe(1);
  });
  it("Should render a logo", () => {
    // console.log(component.debug());
    const wrapper = setUp();
    const logo = wrapper.find(".logo");
    expect(logo.length).toBe(1);
  });
});

//takeout
//Instead of using classname for testing , we should be using data-test attribute. So that other dev's know this is used for testing and should not be changed

//debug
//findTestByAttribute() not working , don't know why
