import React, { Component } from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { fetchMarkers } from "../../redux/actions";

class MapScreen extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
    };
  }

  componentDidMount() {
    this.props.fetchMarkers();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
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
    const { markers } = this.props;
    return (
      <SafeAreaView forceInset={{ top: "always" }}>
        <Map region={region} markers={markers} />
      </SafeAreaView>
    );
  }
}

const mapState = (store) => ({
  markers: store.markerState.markers,
});

const mapDispatch = (dispatch) => ({
  fetchMarkers: () => dispatch(fetchMarkers()),
});

export default connect(mapState, mapDispatch)(MapScreen);
