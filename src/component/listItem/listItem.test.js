import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils";
import ListItem from "./listItem";

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Example Desc",
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Example Desc",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Should render without error", () => {
      const component = wrapper.find(`[data-test="listItemComponent"]`);
      expect(component.length).toBe(1);
    });
    it("Should render a title", () => {
      const title = wrapper.find(`[data-test="title"]`);
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = wrapper.find(`[data-test="desc"]`);
      expect(desc.length).toBe(1);
    });
  });
  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Test Desc",
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Component is not rendered", () => {
      const component = wrapper.find(`[data-test="listItemComponent"]`);
      expect(component.length).toBe(0);
    });
  });
});

//debug
//const component = wrapper.find(`[data-test = "listItemComponent"]`);
//above code not working
// Failed to parse selector: [data-test = "listItemComponent"]
//THis is b.c of the space around = sign
//Remove spaces
//correct
//const component = wrapper.find(`[data-test="listItemComponent"]`);
