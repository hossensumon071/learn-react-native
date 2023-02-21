import React, { Component } from 'react';
import {View, Text} from 'react-native';

// class componnets
class App extends Component {
  render() {
    return (
      <view>
        <Text>Hello world from class components</Text>
      </view>
    );
  }
}

export default App;

// functional components
import React from 'react';
import {View, Text} from 'react-native';
const App = () => {
  return (
    <View>
      <Text>Hello world, this is my first functional components</Text>
    </View>
  );
};

export default App;