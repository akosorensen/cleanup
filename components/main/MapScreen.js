import React, { Component } from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { fetchUserMarkers } from "../../redux/actions";

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
