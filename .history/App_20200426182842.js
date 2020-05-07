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

const DetailsScreen = ()=>(
  <View>
    <Text>
      Details Screen
    </Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home:{
    screen:HomeScreen,
  },
  Details:{
    screen: DetailsScreen,
  },
})
