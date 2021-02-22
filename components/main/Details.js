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
  fetchDate() {
    if (this.props.singleMarker.creation) {
      const time = this.props.singleMarker.creation.toDate();
      return ` on ${time}`;
    }
    return null;
  }

  render() {
    const { caption, downloadURL, name } = this.props.singleMarker;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            Issued by {name}
            {this.fetchDate()}
          </Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: downloadURL }} style={styles.image} />
          </View>
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>{caption}</Text>
          </View>
          <View style={styles.removeContainer}>
            <Button
              style={styles.button}
              title="Cleaned!"
              onPress={() => this.handleDelete()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapState = (store) => ({
  singleMarker: store.markerState.singleMarker,
});

const mapDispatch = (dispatch) => ({
  delete: (id) => dispatch(deleteMarker(id)),
  fetchSingleMarker: (id) => dispatch(fetchSingleMarker(id)),
});

export default connect(mapState, mapDispatch)(Details);

const styles = StyleSheet.create({
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
