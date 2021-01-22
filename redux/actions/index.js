import { USER_STATE_CHANGE, CLEAR_DATA } from "../constants";
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
// https://github.com/SimCoderYoutube/InstagramClone/blob/master/frontend/redux/actions/index.js

// Removed import {shouldUseActivityState} from 'react-native-screens'
// ./node_modules/@react-navigation/bottom-tabs/lib/module/views/ResourceSavingScene.js
// https://github.com/react-navigation/react-navigation/issues/8993
