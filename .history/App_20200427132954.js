import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 66,
            otherParam: "其他参数吧啦吧啦",
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route,navigation }) {
  /* 获取参数 */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title='Go to Details again'
        onPress={() => navigation.push("Details",{itemId:Math.floor(Math.random()*100)})}
      />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button title='Go Home' onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default function App(props) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} initialParams={{ itemId: 42,otherParam: "预设参数", }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
