import React, { useEffect } from "react";
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

const Main = (props) => {
  useEffect(() => {
    props.fetchUser();
  });

  const onLogOut = () => {
    firebase.auth().signOut();
  };

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
            onLogOut();
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
