import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const Map = (props) => {
  const navigation = useNavigation();
  const { region, markers } = props;
  return (
    <MapView style={styles.map} region={region} showsUserLocation={true}>
      {markers && markers.length
        ? markers.map((marker) => {
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
                      <Text style={styles.imageContainer}>
                        <Image
                          source={{ uri: downloadURL }}
                          style={styles.image}
                        />
                      </Text>
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
    backgroundColor: "pink",
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
  },
  imageContainer: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
  },
});

export default Map;
