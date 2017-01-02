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

import Day1 from './views/day1/Day1';
import Day2 from './views/day2/Weather';

class MainView extends Component{


  constructor() {
    super();
    this.state = {
      days:[{
        key:0,
        title:"A stopwatch",
        component: Day1,
        isFA: false,
        icon: "ios-stopwatch",
        size: 48,
        color: "#ff856c",
        hideNav: false
      },{
        key:1,
        title:"A weather app",
        component: Day2,
        isFA: false,
        icon: "ios-partly-sunny",
        size:60,
        color:"#90bdc1",
        hideNav: false,
      }]
    }
  }

  _jumpToDay(index){
    this.props.navigator.push({
      title: this.state.days[index].title,
      index: index + 1,
      display: !this.state.days[index].hideNav,
      component: this.state.days[index].component,
    })
  }

  render(){
    var onThis = this;
    var apps = this.state.days.map(function(element,index){
      return(
        <TouchableHighlight onPress={()=> onThis._jumpToDay(index)} key={element.key} style={[styles.touchBox, index%3==2?styles.touchBox2:styles.touchBox1]} underlayColor="#eee" >
          <View style={styles.boxContainer}>
            <Text style={styles.boxText}>Day {index+1}</Text>
            { element.isFA? <IconFontAwesome size={element.size} name={element.icon} style={[styles.boxIcon,{color:element.color}]}></IconFontAwesome>:
          <Icon size={element.size} name={element.icon} style={[styles.boxIcon,{color:element.color}]}></Icon> }
          </View>
        </TouchableHighlight>
      );
    });
    return(
      <View style={{marginTop:70,flexDirection:'row'}}>
        {apps}
      </View>
    );
  }
}
export default MainView;
