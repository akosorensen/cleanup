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
    const { navigation, singleMarker } = this.props;
    const { caption, downloadURL } = singleMarker;
    return (
      <View style={styles.container}>
        <Text>{caption}</Text>
        <Image source={{ uri: downloadURL }} style={styles.image} />
        <Button title="Remove" onPress={() => this.handleDelete()} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
