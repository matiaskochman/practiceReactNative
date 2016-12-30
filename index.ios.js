import React, { Component } from 'react';
import { AppRegistry,View } from 'react-native';
import App from './components/App';

export default class practice30DaysOfReactNative extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <App />
      </View>
    );
  }
}


AppRegistry.registerComponent('practice30DaysOfReactNative', () => practice30DaysOfReactNative);
