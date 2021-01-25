import React, { useState } from "react";
import { View, TextInput, Image, Button, StyleSheet } from "react-native";
import firebase from "firebase";
import { fetchMarkers } from "../../redux/actions";
import { connect } from "react-redux";
require("firebase/firestore");
require("firebase/firebase-storage");

function Save(props) {
  const [caption, setCaption] = useState("");

  const uri = props.route.params.image;
  const { latitude, longitude } = props.route.params;
  const { navigation } = props;

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

  const savePostData = async (downloadURL) => {
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
      .add({
        downloadURL,
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
        location: new firebase.firestore.GeoPoint(latitude, longitude),
      })
      .then(function () {
        props.fetchMarkers(zipcode);
        navigation.popToTop(); // This will take us to the beginning of navigator (in this case, App component) so we can return to the main page
      });
  };
  // console.log("location from Save: ", latitude, longitude);
  return (
    <View style={styles.container}>
      <TextInput
        styles={styles.descriptionInput}
        numberOfLines={3}
        placeholder="Write a Description.."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Image style={styles.image} source={{ uri: uri }} />
      <Button title="Save" onPress={uploadImage} />
    </View>
  );
}

const mapDispatch = (dispatch) => ({
  fetchMarkers: () => dispatch(fetchMarkers()),
});

export default connect(null, mapDispatch)(Save);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  image: {
    height: 300,
    width: 300,
  },
  descriptionInput: {
    backgroundColor: "goldenrod",
    // height: 40,
  },
});
