import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Section' component={SectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
