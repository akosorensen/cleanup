import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Button } from "react-native";
import styles from "../styles";

import firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";

const Details = (props) => {
  const { navigation } = props;
  const [posts, setPosts] = useState([]);

  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
    </View>
  );
};

export default Details;
