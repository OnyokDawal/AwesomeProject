import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
  Dimensions,
  LogBox,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Cats = ({navigation, route}) => {

    return(
        <View>
            <Text>I'm Cat</Text>
        </View>
    )
}

export default Cats;