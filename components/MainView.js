import React, { Component } from 'react';
import { DeviceEventEmitter,
  Image,Navigator,ScrollView,StatusBar,
  StyleSheet,Text, TouchableOpacity,
  TouchableHighlight,View } from 'react-native';
import Utils from './Utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import styles from '../Styles';

class MainView extends Component{


  constructor() {
    super();
    this.state = {
      days:[{
        key:0,
        title:"A stopwatch",
        component: 'day1',
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false

      }]
    }
  }


  render(){
    var apps = this.state.days.map(function(element,index){
      return(
        <TouchableHighlight key={element.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" >
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day {index+1}</Text>
            { element.isFA? <IconFontAwesome size={element.size} name={element.icon} style={[styles.boxIcon,{color:element.color}]}></IconFontAwesome>:
          <Icon size={element.size} name={element.icon} style={[styles.boxIcon,{color:element.color}]}></Icon> }
          </View>
        </TouchableHighlight>
      );
    });
    return(
      <View style={{marginTop:70}}>
        {apps}
      </View>
    );
  }
}
export default MainView;
