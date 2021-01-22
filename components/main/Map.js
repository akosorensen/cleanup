// import React, { Component } from "react";
// import MapView from "react-native-maps";
// import { Dimensions, StyleSheet, View, Text } from "react-native";

// const Map = () => {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

// export default Map;

import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

const Marker = MapView.Marker;

export default class Map extends Component {
  // renderMarkers() {
  //   return this.props.places.map((place, i) => (
  //     <Marker key={i} title={place.name} coordinate={place.coords} />
  //   ));
  // }

  render() {
    // const { region } = this.props;
    return (
      <MapView
        style={styles.map}
        // region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {/* {this.renderMarkers()} */}
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
