import React, { Component } from 'react';
import { Platform,ListView,StyleSheet,StatusBar,Text,TouchableHighlight,View } from 'react-native';
import Util from '../../Utils';
import WatchFace from './WatchFace';
import WatchControl from './WatchControll';

class Day1 extends Component{
  constructor() {
    super();
      this.state = {
        stopWatch: false,
        resetWatch: true,
        intialTime: 0,
        currentTime:0,
        recordTime:0,
        timeAccumulation:0,
        totalTime: "00:00.00",
        sectionTime: "00:00.00",
        recordCounter: 0,
        record:[
          {title:"",time:""},
          {title:"",time:""},
          {title:"",time:""},
          {title:"",time:""},
          {title:"",time:""},
          {title:"",time:""},
          {title:"",time:""}
        ],
    };
  }

  _addRecord(){

  }
  _clearRecord(){

  }
  _startWatch(){

  }
  _stopWatch(){

  }
  render(){
    return(
      <View style={{paddingTop:80}}>
        <WatchFace  totalTime={this.state.totalTime} sectionTime={this.state.sectionTime} />
        <WatchControl addRecord={()=>this._addRecord()}
            clearRecord={()=>this._clearRecord()}
            startWatch={()=>this._startWatch()}
            stopWatch={()=>this._stopWatch()}></WatchControl>
      </View>
    );
  }
}

export default Day1;
