import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

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
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <Button onPress={this.onLogin} title="Login" />
      </View>
    );
  }
}

export default Login;
