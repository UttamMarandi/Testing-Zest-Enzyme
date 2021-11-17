import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { checkPropTypes } from "prop-types";
// import { findByTestAttr } from "../../../Utils";
import { checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = wrapper.find(`[data-test="HeadlineComponent"]`);
      expect(component.length).toBe(1);
    });
    it("Should render a H1", () => {
      const h1 = wrapper.find(`[data-test="header"]`);
      expect(h1.length).toBe(1);
    });
    it("Should render a description", () => {
      const desc = wrapper.find(`[data-test="desc"]`);
      expect(desc.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = wrapper.find(`[data-test="HeadlineComponent"]`);
      expect(component.length).toBe(0);
    });
  });
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Deac",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined;
    });
  });
});

//debug
//beforeEach() may not be used in a describe block containing no tests.We need to define tests in order to use BeforeEach
