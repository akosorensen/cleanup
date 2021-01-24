import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  DELETE_USER_MARKER,
  FETCH_SINGLE_MARKER,
  FETCH_USER_MARKERS,
} from "../constants";

const initialState = {
  currentUser: null,
  userMarkers: [],
  singleMarker: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return { ...state, currentUser: action.currentUser };
    case CLEAR_DATA:
      return initialState;
    case FETCH_USER_MARKERS:
      return {
        ...state,
        userMarkers: action.userMarkers,
      };
    case FETCH_SINGLE_MARKER:
      return { ...state, singleMarker: action.marker };
    case DELETE_USER_MARKER:
      return {
        ...state,
        userMarkers: state.userMarkers.filter(
          (marker) => marker.id !== action.id
        ),
        singleMarker: initialState.singleMarker,
      };
    default:
      return state;
  }
};
