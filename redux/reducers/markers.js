import { FETCH_MARKERS, DELETE_MARKER } from "../constants";

const initialState = [];

export const markers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKERS:
      return action.markers;
    case DELETE_MARKER:
      return state.filter((marker) => marker.id !== action.id);
    default:
      return state;
  }
};
