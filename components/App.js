import React, { Component } from 'react';
import { DeviceEventEmitter,
  Image,Navigator,ScrollView,StatusBar,
  StyleSheet,Text, TouchableOpacity,
  TouchableHighlight,View } from 'react-native';
import Utils from './Utils';
import styles from '../Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

  class App extends Component{
    componentDidMount() {
      StatusBar.setBarStyle(0);
    }
    
    render() {
      return (
        <View style={styles.container}>
          <Text>Hola , esto es un simulacro</Text>
          <Text>Hola , esto es un simulacro</Text>
          <Text>Hola , esto es un simulacro</Text>
          <Text>Hola , esto es un simulacro</Text>
        </View>
      );
    }
  }

  export default App;
