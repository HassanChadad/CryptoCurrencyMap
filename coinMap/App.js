import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/Store'
import  MainContainer from './src/components/MainContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <MainContainer />
        </View>
      </Provider>
    );
  }
}