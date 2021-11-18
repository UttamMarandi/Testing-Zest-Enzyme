import { types } from "../../actions/types";
import postsReduser from "./reducer";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    //we are checking for what are the default states for that reducer
    const newState = postsReduser(undefined, {}); //undefined is the current state, and {} is the action
    expect(newState).toEqual([]);
    //test is failing for now as postsReducer return null instead of on object
  });
  it("Should return new state if receiving type", () => {
    const posts = [
      { title: "Tests 1" },
      { title: "Tests 1" },
      { title: "Tests 1" },
    ];
    const newState = postsReduser(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
    //for now the test is failing b.c posts provided as payload is not updataed in postsReducer.
    //now we need to update our code in postsReducer to make it not fail.
    //this is TDD - Test Driven Development approach
  });
});
