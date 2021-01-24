import React, { useState } from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
// import { deleteMarker } from "../../redux/actions";
// import { connect } from "react-redux";

const Map = (props) => {
  const navigation = useNavigation();
  const { region, userMarkers } = props;
  console.log("refreshed");

  return (
    <MapView style={styles.map} region={region} showsUserLocation={true}>
      {userMarkers && userMarkers.length
        ? userMarkers.map((marker) => {
            const { caption, downloadURL, id, location } = marker;
            const latitude = location.U;
            const longitude = location.k;
            return (
              <Marker
                key={id}
                coordinate={{ latitude, longitude }}
                image={require("../../assets/broom.png")}
              >
                <Callout
                  style={styles.calloutContainer}
                  tooltip={false}
                  // onPress={() => props.delete(id)}
                  onPress={() => navigation.navigate("Details", { id })}
                >
                  <View style={styles.calloutContainer}>
                    <View>
                      <Text>{caption}</Text>
                    </View>
                    <View>
                      <Image
                        source={{ uri: downloadURL }}
                        style={styles.image}
                      />
                    </View>
                  </View>
                </Callout>
              </Marker>
            );
          })
        : null}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  calloutContainer: {
    backgroundColor: "pink",
    flex: 1,
  },
  imageContainer: {
    height: 100,
    width: 100,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

// const mapDispatch = (dispatch) => ({
//   delete: (id) => dispatch(deleteMarker(id)),
// });

// export default connect(null, mapDispatch)(Map);

export default Map;
