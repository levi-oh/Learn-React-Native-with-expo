import React from 'react';
import {View,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

const HomeScreen = ()=>(
  <View>
    <Text>
      Home Screen
    </Text>
  </View>
);

const DetailScreen = ()=>(
  <View>
    <Text>
      Detail Screen
    </Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home:{
    screen:Home
  }
})
