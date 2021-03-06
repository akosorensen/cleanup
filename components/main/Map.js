import React from "react";
import { Text, View, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Map-style";

const Map = (props) => {
  const navigation = useNavigation();
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

export default Map;
