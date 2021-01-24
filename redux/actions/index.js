import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  FETCH_USER_LOCATION,
  UPDATE_USER_LOCATION,
  FETCH_MARKERS,
  FETCH_USER_MARKERS,
  DELETE_MARKER,
  DELETE_USER_MARKER,
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
        let userMarkers = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        userMarkers.length
          ? dispatch({ type: FETCH_USER_MARKERS, userMarkers })
          : console.log("No markers");
      });
  };
}

export function deleteMarker(id) {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_USER_MARKER, id });
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
