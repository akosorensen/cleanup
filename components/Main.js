import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";
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
    };
  }
  onLogout() {
    firebase.auth().signOut();
  }
  geoFindMe() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => console.log(error)
    );
  }
  componentDidMount() {
    this.props.fetchUser();
    this.geoFindMe();
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

const mapState = (state) => ({
  currentUser: state.userState.currentUser,
});

const mapDispatch = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapState, mapDispatch)(Main);
