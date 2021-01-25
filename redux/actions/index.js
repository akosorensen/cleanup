import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  DELETE_USER_MARKER,
  FETCH_SINGLE_MARKER,
  FETCH_USER_MARKERS,
  FETCH_MARKERS,
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
          : console.log("This user has no markers");
      });
  };
}

export function fetchSingleMarker(id) {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        const id = snapshot.id;
        const marker = { id, ...data };
        marker
          ? dispatch({ type: FETCH_SINGLE_MARKER, marker })
          : console.log("This user does not have a marker with associated id");
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

export function fetchMarkers() {
  return (dispatch) => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapshot) => {
        let markers = snapshot.docs.map((doc) => {
          const data = doc.data();
          const id = doc.id;
          return { id, ...data };
        });
        markers.length
          ? dispatch({ type: FETCH_MARKERS, markers })
          : console.log("No markers");
      });
  };
}
