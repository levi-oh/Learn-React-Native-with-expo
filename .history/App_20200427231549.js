import "react-native-gesture-handler";
import * as React from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <View style={styles.center}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require("./assets/splash.png")}
      />
    </View>
  );
}

function HomeScreen({ navigation, route }) {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title='Update count' />
      ),
    });
  }, [navigation, setCount]);

  return (
    <View style={styles.center}>
      <Button
        title='Create post'
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Button
        title='Update the title'
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Text>Count: {countNum}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title='back'
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.center}>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title='Done'
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate("Home", { post: postText });
        }}
      />
    </View>
  );
}

function MessageScreen({ navigation, route }) {
  return (
    <View style={styles.center}>
      <Text>This is MessageScreen</Text>
    </View>
  );
}

function MineScreen({ navigation, route }) {
  return (
    <View style={styles.center}>
      <Text>This is MineScreen</Text>
    </View>
  );
}

function SettingScreen({ navigation, route }) {
  return (
    <View style={styles.center}>
      <Text>This is settingScreen</Text>
    </View>
  );
}
//标签导航器主页
function Home({ navigation, route }) {
  const [count, setCount] = React.useState(0);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Button onPress={() => setCount((c) => c + 1)} title='Update count' />
          <Button
            onPress={() =>
              navigation.navigate("Home", {
                screen: "HomeScreen",
                
              })
            }
            title='set count'
          />
        </View>
      ),
    });
  }, [navigation, setCount]);
  return (
    <Tab.Navigator>
      <Tab.Screen name='HomeScreen' component={HomeScreen} />
      <Tab.Screen name='Message' component={MessageScreen} />
    </Tab.Navigator>
  );
}

export default function App(props) {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={({ route }) => ({
              title: route.params?.post,
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            })}
          />
          <Stack.Screen
            name='CreatePost'
            component={CreatePostScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen name='Mine' component={MineScreen} />
          <Stack.Screen name='Setting' component={SettingScreen} />
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
