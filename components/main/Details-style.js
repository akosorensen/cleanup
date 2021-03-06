import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbf1fa",
  },
  nameContainer: {
    margin: 20,
    alignItems: "flex-end",
  },
  name: {
    fontSize: 15,
    color: "#284184",
    fontWeight: "900",
    fontStyle: "italic",
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#bbf1fa",
    alignItems: "center",
  },
  captionContainer: {
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
  removeContainer: {
    position: "absolute",
    bottom: 40,
    width: "40%",
  },
});
