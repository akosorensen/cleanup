import React, { useEffect } from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";
import { useLocation } from "./Location";
import { connect } from "react-redux";
import { fetchMarkers } from "../../redux/actions";

const MapScreen = () => {
  const { latitude, longitude, getLocation } = useLocation();
  useEffect(() => {
    getLocation();
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map region={{ latitude, longitude }} />
    </SafeAreaView>
  );
};

export default MapScreen;
