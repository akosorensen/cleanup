import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { deleteMarker, fetchSingleMarker } from "../../redux/actions";
import { connect } from "react-redux";

class Details extends Component {
  componentDidMount() {
    this.props.fetchSingleMarker(this.props.route.params.id);
  }
  handleDelete() {
    this.props.navigation.goBack();
    this.props.delete(this.props.route.params.id);
  }
  render() {
    const { singleMarker } = this.props;
    const { caption, downloadURL } = singleMarker;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: downloadURL }} style={styles.image} />
        </View>
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>{caption}</Text>
        </View>
        <View style={styles.removeContainer}>
          <Button
            style={styles.button}
            title="Remove"
            onPress={() => this.handleDelete()}
          />
        </View>
      </View>
    );
  }
}

const mapState = (store) => ({
  singleMarker: store.userState.singleMarker,
});

const mapDispatch = (dispatch) => ({
  delete: (id) => dispatch(deleteMarker(id)),
  fetchSingleMarker: (id) => dispatch(fetchSingleMarker(id)),
});

export default connect(mapState, mapDispatch)(Details);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  captionContainer: {
    backgroundColor: "#ffffd2",
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  caption: {
    fontSize: 20,
    color: "#30475e",
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
  },
  button: {
    padding: 150,
  },
});
