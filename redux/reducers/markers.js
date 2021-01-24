import { FETCH_MARKERS } from "../constants";

const initialState = [];

export const markers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKERS:
      return action.markers;
    default:
      return state;
  }
};
