import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const Map = (props) => {
  const { region } = props;
  console.log("props from Map: ", props);
  return (
    <MapView style={styles.map} region={region}>
      <Marker
        coordinate={region}
        title="Your Location"
        description="Your location description"
        image={require("../../assets/broom.png")}
      >
        <Callout tooltip>
          {/* <View style={styles.bubble}> */}
          <Text>Plastic bottles</Text>
          {/* <Image
              style={styles.image}
              source={require("../../assets/Freya.jpg")}
            /> */}
          {/* </View> */}
          {/* <View style={styles.arrowBorder} /> */}
          {/* <View style={styles.arrow} /> */}
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  // bubble: {
  //   flexDirection: "row",
  //   alignSelf: "flex-start",
  //   backgroundColor: "#fff",
  //   borderRadius: 6,
  //   borderColor: "#ccc",
  //   borderWidth: 0.5,
  //   padding: 15,
  // },
  // image: {
  //   width: 80,
  //   height: 120,
  // },
  // arrow: {
  //   backgroundColor: "transparent",
  //   borderColor: "transparent",
  //   borderTopColor: "#fff",
  //   borderWidth: 16,
  //   alignSelf: "center",
  //   marginTop: -32,
  // },
  // arrowBorder: {
  //   backgroundColor: "transparent",
  //   borderColor: "transparent",
  //   borderTopColor: "#007a87",
  //   borderWidth: 16,
  //   alignSelf: "center",
  //   marginTop: "0.5",
  // },
});

export default Map;
