import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  FETCH_USER_LOCATION,
  UPDATE_USER_LOCATION,
  FETCH_USER_MARKERS,
} from "../constants";

const initialState = {
  currentUser: null,
  currenUserLocation: {
    latitude: 0,
    longitude: 0,
  },
  markers: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return { ...state, currentUser: action.currentUser };
    case CLEAR_DATA:
      return initialState;
    case UPDATE_USER_LOCATION:
      return {
        ...state,
        currenUserLocation: {
          latitude: action.latitude,
          longitude: action.longitude,
        },
      };
    case FETCH_USER_MARKERS:
      return {
        ...state,
        markers: action.markers,
      };
    case FETCH_USER_LOCATION:
      return { ...state, currenUserLocation: action.region };
    default:
      return state;
  }
};
