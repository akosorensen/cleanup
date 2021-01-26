import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

import firebase from "firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onLogin = this.onLogin.bind(this);
  }
  async onLogin() {
    try {
      const { email, password } = this.state;
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="email"
            style={styles.caption}
            numberOfLines={3}
            onChangeText={(email) => this.setState({ email })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="password"
            style={styles.caption}
            numberOfLines={3}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onLogin} title="Login" />
        </View>
      </View>
    );
  }
}

export default Login;

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
