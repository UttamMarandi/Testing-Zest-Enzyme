import React from "react";
import moxios from "moxios";
import { shallow } from "enzyme";
import { testStore } from "../../Utils";
import { fetchPosts } from "../actions";
import { store } from "../createStore";

describe("fetchPosts action", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("Should update the store correctly", () => {
    const expectedProps = [
      {
        title: "Example title 1",
        desc: "Some text 1",
      },
      {
        title: "Example title 2",
        desc: "Some text 2",
      },
      {
        title: "Example title 2",
        desc: "Some text 2",
      },
    ];
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedProps,
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedProps);
    });
  });
});
