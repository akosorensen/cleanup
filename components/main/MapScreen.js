import React, { Component } from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("position from MapScreen: ", position); // to be deleted
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
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
    console.log("this.state from MapScreen: ", this.state); // to be deleted
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Map region={this.state} />
      </SafeAreaView>
    );
  }
}

export default MapScreen;
