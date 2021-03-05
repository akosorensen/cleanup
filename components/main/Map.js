import React, { useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import { fetchMarkers } from "../../redux/actions";

const Map = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    props.fetchMarkers();
  });

  const { latitude, longitude } = props.region;

  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <MapView style={styles.map} region={region} showsUserLocation={true}>
      {props.markers && props.markers.length
        ? props.markers.map((marker) => {
            const { caption, downloadURL, id, location } = marker;
            const latitude = location.U;
            const longitude = location.k;
            return (
              <Marker
                key={id}
                coordinate={{ latitude, longitude }}
                image={require("../../assets/broom.png")}
                tracksViewChanges={false}
              >
                <Callout
                  tooltip={true}
                  onPress={() => navigation.navigate("Details", { id })}
                >
                  <View>
                    <View style={styles.bubble}>
                      <View style={styles.captionContainer}>
                        <Text style={styles.caption}>{caption}</Text>
                      </View>
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

const mapState = (store) => ({
  markers: store.markerState.markers,
});

const mapDispatch = (dispatch) => ({
  fetchMarkers: () => dispatch(fetchMarkers()),
});

export default connect(mapState, mapDispatch)(Map);

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
    alignItems: "center",
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
    position: "absolute",
    flex: 1,
  },
  imageContainer: {
    fontSize: 150,
  },
});
