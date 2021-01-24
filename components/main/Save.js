import React, { useState } from "react";
import { View, TextInput, Image, Button, StyleSheet } from "react-native";
import firebase from "firebase";
import { fetchUserMarkers } from "../../redux/actions";
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

  const savePostData = (downloadURL) => {
    firebase
      .firestore()
      .collection("posts")
      .doc(firebase.auth().currentUser.uid)
      .collection("userPosts")
      .add({
        downloadURL,
        caption,
        creation: firebase.firestore.FieldValue.serverTimestamp(),
        location: new firebase.firestore.GeoPoint(latitude, longitude),
      })
      .then(function () {
        props.fetchUserMarkers();
        navigation.popToTop(); // This will take us to the beginning of navigator (in this case, App component) so we can return to the main page
      });
  };
  // console.log("location from Save: ", latitude, longitude);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: uri }} />
      <TextInput
        styles={styles.descriptionInput}
        placeholder="Write a Description.."
        onChangeText={(caption) => setCaption(caption)}
      />
      <Button title="Save" onPress={uploadImage} />
    </View>
  );
}

const mapDispatch = (dispatch) => ({
  fetchUserMarkers: () => dispatch(fetchUserMarkers()),
});

export default connect(null, mapDispatch)(Save);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  image: {
    flex: 1,
  },
  descriptionInput: {
    backgroundColor: "goldenrod",
    height: 40,
  },
});
