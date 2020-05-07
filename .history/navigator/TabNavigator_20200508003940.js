import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarVisible: (tabBarVisible) => {
            let tabBarVisible;
            if (route.name === "Home") {
              tabBarVisible = false;
            } else if (route.name === "Courses") {
              tabBarVisible = false;
            } else if (route.name === "Projects") {
              tabBarVisible = false;
            }
            return tabBarVisible;
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              size = 25;
            } else if (route.name === "Courses") {
              iconName = focused ? "ios-list-box" : "ios-list";
              size = 25;
            } else if (route.name === "Projects") {
              iconName = focused ? "ios-list-box" : "ios-list";
              size = 25;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name='Courses' component={CoursesStack} />
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Projects' component={ProjectsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
