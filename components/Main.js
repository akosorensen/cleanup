import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMarkers, fetchUser } from "../redux/actions";
import MapScreen from "./main/MapScreen";
import firebase from "firebase";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const Empty = () => {
  return null;
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
  }
  onLogout() {
    firebase.auth().signOut();
  }
  componentDidMount() {
    this.props.fetchUser();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      },
      (error) => console.log(error),
      {
        enableHighAccuracy: false,
        timeout: 200000,
        maximumAge: 1000,
      }
    );
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <Tab.Navigator initialRouteName="MapScreen" labeled={false}>
        <Tab.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="PostTrash"
          component={Empty}
          listeners={({ navigation }) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate("Post", { latitude, longitude });
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-box" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Empty}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              this.onLogout();
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="logout-variant"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapState = (store) => ({
  currentUser: store.userState.currentUser,
});

const mapDispatch = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapState, mapDispatch)(Main);
