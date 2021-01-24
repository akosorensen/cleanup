import { DELETE_MARKER, FETCH_SINGLE_MARKER } from "../constants";

const initialState = {};

export const singleMarker = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_MARKER:
      return action.marker;
    case DELETE_MARKER:
      return initialState;
    default:
      return state;
  }
};
