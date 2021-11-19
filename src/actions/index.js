import { types } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  const res = await axios
    .get("https://links.papareact.com/isz")
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
