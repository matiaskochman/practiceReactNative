import React, { Component } from 'react';
import { DeviceEventEmitter,
  Image,Navigator,ScrollView,StatusBar,
  StyleSheet,Text, TouchableOpacity,
  TouchableHighlight,View } from 'react-native';
import Utils from './Utils';
import stylesObject from '../Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import NavigationBar from './NavigationBarObj';
import MainView from './MainView';

  class App extends Component{
    componentDidMount() {
      StatusBar.setBarStyle(0);
    }
    configureScene(route, routeStack) {
      if (route.type == 'Bottom') {
        return Navigator.SceneConfigs.FloatFromBottom;
      }
      return Navigator.SceneConfigs.PushFromRight;
    }

    routeMapper = {
      LeftButton: (route, navigator, index, navState) =>
        {
          if(route.index > 0) {
            return (<TouchableOpacity
              underlayColor='transparent'
              onPress={() => {if (index > 0) {navigator.pop()}}}>
              <Text style={stylesObject.navBackBtn}><Icon size={18} name="ios-arrow-back"></Icon> back</Text>
            </TouchableOpacity>);
          }else{
            return null;
          }
        },
      RightButton: (route, navigator, index, navState) =>
        { return null; },
      Title: (route, navigator, index, navState) =>
        { return (<Text style={stylesObject.navTitle}>{route.title}</Text>); },
    };
    render() {
      return (
        <Navigator
          initialRoute={{
            title: '30 Days of RN',
            index: 0,
            display: true,
            component: MainView,
          }}
          configureScene={this.configureScene}
          renderScene={(route, navigator) => {
            return <route.component navigator={navigator} title={route.title} index={route.index} />
          }}
          navigationBar={
            <NavigationBar
              routeMapper={this.routeMapper}
              style={stylesObject.navBar}
            />
          }
        />
    );
    }
  }

  export default App;
