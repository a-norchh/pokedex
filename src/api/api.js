import axios from "./axios";
import { START_FETCHING_CARDS } from "../constants/actions";

export const startFetching = async (dispatch) => {
  try {
    const response = await axios.get("cards");
    console.log(response.data);
    dispatch({ type: START_FETCHING_CARDS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
