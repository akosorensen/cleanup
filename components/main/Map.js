import React, { useState } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const Map = (props) => {
  const { region, markers } = props;

  return (
    <MapView style={styles.map} region={region} showsUserLocation={true}>
      {markers.map((marker) => {
        const { caption, downloadURL, id, location } = marker;
        let latitude = location.U;
        let longitude = location.k;
        return (
          <Marker
            key={id}
            coordinate={{ latitude, longitude }}
            image={require("../../assets/broom.png")}
          >
            <Callout tooltip={false}>
              <Text>{caption}</Text>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: downloadURL }} />
              </View>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },
  image: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
  },
});

export default Map;
