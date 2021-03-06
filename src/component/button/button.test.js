import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils";
import SharedButton from "./button";

const setUp = (props = {}) => {
  const component = shallow(<SharedButton />);
  console.log("comoponent", component);
  return component;
};
setUp();

describe("SharedButton Component", () => {
  describe("Checking proptypes", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: mockFunc,
      };
      wrapper = setUp(props);
    });
  });

  it("Should render a button", () => {
    const button = wrapper.find(`[data-test = "buttonComponent"]`);
    expect(button.length).toBe(1);
  });
  it("Should emit callback on click event", () => {
    const button = wrapper.find(`[data-test="buttonComponent"]`);
    button.simulate("click");
    //simulate method simulates the click event
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
