import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import firebase from "firebase";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      zipcode: 0,
    };
    this.onSignUp = this.onSignUp.bind(this);
  }
  onSignUp() {
    const { email, password, name, zipcode } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
            zipcode,
          });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.caption}
            numberOfLines={3}
            placeholder="name"
            onChangeText={(name) => this.setState({ name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.caption}
            numberOfLines={3}
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.caption}
            numberOfLines={3}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.caption}
            numberOfLines={3}
            placeholder="zipcode"
            onChangeText={(zipcode) => this.setState({ zipcode })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={this.onSignUp}
            title="Sign Up"
          />
        </View>
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbf1fa",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  caption: {
    fontSize: 20,
    color: "#284184",
    fontWeight: "500",
  },
  image: {
    height: 350,
    width: 350,
    resizeMode: "cover",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "40%",
    marginVertical: 30,
  },
});
