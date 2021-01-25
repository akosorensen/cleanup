import {
  USER_STATE_CHANGE,
  CLEAR_DATA,
  DELETE_MARKER,
  FETCH_SINGLE_MARKER,
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

export function fetchSingleMarker(id) {
  return async (dispatch) => {
    const zipcode = await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => snapshot.data().zipcode);

    firebase
      .firestore()
      .collection("posts")
      .doc("location")
      .collection(zipcode)
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
  return async (dispatch) => {
    const zipcode = await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => snapshot.data().zipcode);

    firebase
      .firestore()
      .collection("posts")
      .doc("location")
      .collection(zipcode)
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_MARKER, id });
      });
  };
}

export function fetchMarkers() {
  return async (dispatch) => {
    const zipcode = await firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => snapshot.data().zipcode);

    firebase
      .firestore()
      .collection("posts")
      .doc("location")
      .collection(zipcode)
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
