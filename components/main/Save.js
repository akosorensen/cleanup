import React, { useState } from "react";
import { View, TextInput, Image, Button } from "react-native";
import firebase from "firebase";
import { fetchMarkers } from "../../redux/actions";
import { styles } from "./Save-style";

import { connect } from "react-redux";
require("firebase/firestore");
require("firebase/firebase-storage");

function Save(props) {
  const [caption, setCaption] = useState("");

  const uri = props.route.params.image;
  const { latitude, longitude } = props.route.params;
  const { navigation } = props;
  const { zipcode, name } = props.currentUser;

  const uploadImage = async () => {
    const childPath = `posts/${
      firebase.auth().currentUser.uid
    }/${Math.random().toString(36)}`;

    const response = await fetch(uri);
    const blob = await response.blob();

    const task = firebase.storage().ref().child(childPath).put(blob);

    const taskProgress = (snapshot) => {
      console.log(`transferred: ${snapshot.bytesTransferred}`);
    };
    const taskCompleted = () => {
      task.snapshot.ref.getDownloadURL().then((snapshot) => {
        savePostData(snapshot);
        console.log("completed: ", snapshot);
      });
    };
    const taskError = (snapshot) => {
      console.log("error: ", snapshot);
    };
    task.on("state_changed", taskProgress, taskError, taskCompleted);
  };

  const savePostData = (downloadURL) => {
    const data = firebase
      .firestore()
      .collection("posts")
      .doc("location")
      .collection(zipcode)
      .add({
        name,
        downloadURL,
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
        location: new firebase.firestore.GeoPoint(latitude, longitude),
      })
      .then(function () {
        props.fetchMarkers();
        navigation.popToTop();
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.caption}
          numberOfLines={3}
          placeholder="Write a Description.."
          onChangeText={(caption) => setCaption(caption)}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: uri }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Save" onPress={uploadImage} />
      </View>
    </View>
  );
}

const mapState = (state) => ({
  currentUser: state.userState.currentUser,
});

const mapDispatch = (dispatch) => ({
  fetchMarkers: () => dispatch(fetchMarkers()),
});

export default connect(mapState, mapDispatch)(Save);
