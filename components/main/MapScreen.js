import React from "react";
import Map from "./Map";
import { SafeAreaView } from "react-native";

const MapScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Map />
    </SafeAreaView>
  );
};

export default MapScreen;
