import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Section' component={SectionScreen} />
    </Stack.Navigator>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Courses' component={SectionScreen} />
    </Stack.Navigator>
  );
}

function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Projects' component={SectionScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Courses' component={CoursesStack} />
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Projects' component={ProjectsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
