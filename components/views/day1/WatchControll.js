import React , { Component } from 'react';
import { Platform,ListView,StyleSheet,StatusBar,Text,TouchableHighlight,View } from 'react-native';
import Util from '../../Utils';

class WatchControll extends Component{
  render(){
    return(
      <View style={{width: Util.size.width,
        height: 110,
        flexDirection:"row",
        backgroundColor: '#f3f3f3',
        paddingTop: 20, paddingLeft: 60, paddingRight:60, paddingBottom:0,
      }}>
        <View style={{flex:1,alignItems:"flex-start"}}>
          <TouchableHighlight style={{width: 70,height: 70,borderRadius: 35,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:14,backgroundColor:"transparent",color:"#555"}}>Stop</Text>
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
          }}>
            <Text style={{
              fontSize:14,
              backgroundColor:"transparent"
            }}>Start
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default WatchControll;
