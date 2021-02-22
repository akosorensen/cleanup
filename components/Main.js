import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions";
import MapScreen from "./main/MapScreen";
import firebase from "firebase";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect } from "react/cjs/react.development";

const Tab = createMaterialBottomTabNavigator();

const Empty = () => {
  return null;
};

const Main = (props) => {
  const onLogout = () => {
    firebase.auth().signOut();
  };
  useEffect(() => {
    props.fetchUser();
  });

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
            navigation.navigate("Post");
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
            firebase.auth().signOut();
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
};

const mapState = (state) => ({
  currentUser: state.userState.currentUser,
});

const mapDispatch = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapState, mapDispatch)(Main);
