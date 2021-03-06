import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  imageContainer: {
    justifyContent: "center",
    margin: 20,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    width: "40%",
    marginVertical: 30,
  },
});
