import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { deleteMarker, fetchSingleMarker } from "../../redux/actions";
import { connect } from "react-redux";
import { styles } from "./Details-style";

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
