import React, { useEffect } from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";
import { useLocation } from "./Location";
import { fetchMarkers } from "../../redux/actions";
import { connect } from "react-redux";

const MapScreen = (props) => {
  const { latitude, longitude, getLocation } = useLocation();

  useEffect(() => {
    getLocation();
    props.fetchMarkers();
  }, [latitude, longitude]);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map region={{ latitude, longitude }} markers={props.markers} />
    </SafeAreaView>
  );
};

const mapState = (store) => ({
  markers: store.markerState.markers,
});

const mapDispatch = (dispatch) => ({
  fetchMarkers: () => dispatch(fetchMarkers()),
});

export default connect(mapState, mapDispatch)(MapScreen);
