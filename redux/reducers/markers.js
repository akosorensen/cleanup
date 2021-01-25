import { FETCH_ALL_MARKERS } from "../constants";

const initialState = {
  markers: [],
  singleMarker: {},
};

export const markers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MARKERS:
      return {
        ...state,
        markers: action.markers,
      };
    default:
      return state;
  }
};
