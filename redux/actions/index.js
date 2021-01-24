import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  FETCH_USER_LOCATION,
  UPDATE_USER_LOCATION,
  FETCH_MARKERS,
  FETCH_USER_MARKERS,
} from "../constants";
import firebase from "firebase";
require("firebase/firestore");

export const clearData = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_DATA });
  };
};

export function fetchUser() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() });
        } else {
          console.log("User does not exist");
        }
      });
  };
}

export function fetchUserMarkers() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .get()
      .then((snapshot) => {
        let markers = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        markers.length
          ? dispatch({ type: FETCH_USER_MARKERS, markers })
          : console.log("No markers");
      });
  };
}

export const fetchUserLocation = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_LOCATION });
  };
};

export const postUserLocation = (latitude, longitude) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_LOCATION, latitude, longitude });
  };
};
