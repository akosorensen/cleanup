import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    alignItems: "center",
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  caption: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    position: "absolute",
    flex: 1,
  },
  imageContainer: {
    fontSize: 150,
  },
});
