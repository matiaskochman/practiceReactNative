import React , { Component } from 'react';
import { Platform,ListView,StyleSheet,StatusBar,Text,TouchableHighlight,View } from 'react-native';
import Util from '../../Utils';

class WatchControll extends Component{

  constructor(props){
    super(props);
    this.state = {
      watchOn: false,
      startBtnText: "Start",
      addRecordBtnText: "Add Record",
      startBtnColor: "#60B644",
      underlayColor:"#fff",
    };
  }
  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch()
      this.setState({
        startBtnText: "Stop",
        startBtnColor: "#ff0044",
        addRecordBtnText: "Add Record",
        underlayColor:"#eee",
        watchOn: true
      })
    }else{
      this.props.stopWatch()
      this.setState({
        startBtnText: "Start",
        startBtnColor: "#60B644",
        addRecordBtnText: "Add Record",
        underlayColor:"#eee",
        watchOn: false
      })
    }
  }

  _addRecord() {
    if (this.state.watchOn) {
      this.props.addRecord()
    }else{
      this.props.clearRecord()
      this.setState({
        stopBtnText: "Stop"
      })
    }
  }

  render(){

    var onThis = this;
    return(
      <View style={{width: Util.size.width,
        height: 110,
        flexDirection:"row",
        backgroundColor: '#f3f3f3',
        paddingTop: 20, paddingLeft: 60, paddingRight:60, paddingBottom:0,
      }}>
        <View style={{flex:1,alignItems:"flex-start"}}>
          <TouchableHighlight onPress={() => {onThis._addRecord()}}
            style={{width: 70,height: 70,borderRadius: 35,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:14,backgroundColor:"transparent",color:"#555"}}>{this.state.addRecordBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1,alignItems:"flex-end"}}>
          <TouchableHighlight style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor:"#fff",
            alignItems:"center",
            justifyContent:"center"
          }} onPress={() => {onThis._startWatch()}}>
            <Text style={{
              fontSize:14,
              backgroundColor:"transparent"
            }}>{this.state.startBtnText}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default WatchControll;
