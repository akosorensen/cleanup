import {
  FETCH_MARKERS,
  FETCH_SINGLE_MARKER,
  DELETE_MARKER,
} from "../constants";

const initialState = {
  markers: [],
  singleMarker: {},
};

export const markers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKERS:
      return {
        ...state,
        markers: action.markers,
      };
    case FETCH_SINGLE_MARKER:
      return { ...state, singleMarker: action.marker };
    case DELETE_MARKER:
      return {
        ...state,
        markers: state.markers.filter((marker) => marker.id !== action.id),
        singleMarker: initialState.singleMarker,
      };
    default:
      return state;
  }
};
