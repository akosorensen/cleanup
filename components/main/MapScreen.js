import React, { Component } from "react";
import Map from "./Map";
import { SafeAreaView, Button, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchUserMarkers } from "../../redux/actions";
import firebase from "firebase";

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
    };
  }

  componentDidMount() {
    this.props.fetchUserMarkers();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: false,
        timeout: 200000,
        maximumAge: 1000,
      }
    );
  }

  render() {
    const { region } = this.state;
    const { userMarkers } = this.props;

    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Map region={region} userMarkers={userMarkers} />
      </SafeAreaView>
      // <View style={{ flex: 1 }}>
      //   <View style={{ height: "80%", width: "100%" }}>
      //     <Map region={region} userMarkers={userMarkers} />
      //   </View>
      //   <Button title="Logout" onPress={() => this.onLogout()} />
      // </View>
    );
  }
}

const mapState = (store) => ({
  userMarkers: store.userState.userMarkers,
});

const mapDispatch = (dispatch) => ({
  fetchUserMarkers: () => dispatch(fetchUserMarkers()),
});

export default connect(mapState, mapDispatch)(MapScreen);
