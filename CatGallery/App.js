/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import Cats from './Screens/Cats';

const stackNavigator = createStackNavigator({
  Cats:{
    name:'Cats',
    screen: Cats,
    navigationOptions:{
      headerShown: false
    }
  }
})

const App = createAppContainer(stackNavigator);

export default App;
