import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

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
                  tooltip={true}
                  onPress={() => navigation.navigate("Details", { id })}
                >
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.caption}>{caption}</Text>
                      <Image
                        source={{ uri: downloadURL }}
                        style={styles.image}
                      />
                    </View>
                  </View>
                  <View style={styles.arrowBorder} />
                  <View style={styles.arrow} />
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
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
  },
  caption: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
    // position: "absolute",
  },
});

export default Map;
