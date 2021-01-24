import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { deleteMarker } from "../../redux/actions";
import { connect } from "react-redux";

const Map = (props) => {
  const navigation = useNavigation();
  const { region, markers } = props;
  console.log("refreshed");
  return (
    <MapView style={styles.map} region={region} showsUserLocation={true}>
      {markers.map((marker) => {
        const { caption, downloadURL, id, location } = marker;
        const latitude = location.U;
        const longitude = location.k;
        const url = marker.downloadURL;
        return (
          <Marker
            key={id}
            coordinate={{ latitude, longitude }}
            image={require("../../assets/broom.png")}
          >
            <Callout style={styles.calloutContainer} tooltip={false}>
              <Text>{caption}</Text>
              <TouchableOpacity onPress={() => props.delete(id)}>
                <Image source={{ uri: url }} style={styles.image} />
              </TouchableOpacity>
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
  },
  calloutContainer: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },
  image: {
    height: 250,
    width: 250,
  },
});

const mapDispatch = (dispatch) => ({
  delete: (id) => dispatch(deleteMarker(id)),
});

export default connect(null, mapDispatch)(Map);
