import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";

const Landing = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Image style={styles.image} source={require("../../assets/Logo.png")} />
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <Button
          title="Create Acount"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  </View>
);

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ffb9",
    alignItems: "center",
  },
  titleContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    height: 350,
    width: 350,
    resizeMode: "cover",
  },
  buttonsContainer: {
    justifyContent: "center",
    flex: 3,
  },
  buttonContainer: {
    margin: 10,
  },
});
