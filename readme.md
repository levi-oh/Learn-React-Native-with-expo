# Learn-React-Native-with-expo
Learn-React-Native-with-expo

- # expo的使用
    - ## 创建一个程序
        - 到指定目录下，cmd运行
        - `expo init `
    - ## 启动调试
        - cmd运行
        - `expo start`
    - ## 退出调试
        - Ctrl+C
- # navigation（导航）学习
    - ## 安装
        - `yarn add react-navigation`
    - ## 安装依赖
        - expo开发流
            - `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
        - 裸开发流
            - `yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`
    - ## 注意事项
        - `import 'react-native-gesture-handler';`要在app.js中置顶
        - 如果运行报错，尝试重新安装插件!!!
            - `expo install @react-navigation/native`
            - `expo install @react-navigation/stack`
    - ## navigator（导航器）
        - ### StackNavigator（堆栈导航器）
            - 创建StackNavigator的Demo
                ```JSX
                import "react-native-gesture-handler";
                import * as React from "react";
                import { View, Text, StyleSheet } from "react-native";
                import { NavigationContainer } from "@react-navigation/native";
                import { createStackNavigator } from "@react-navigation/stack";

                const Stack = createStackNavigator();

                const HomeScreen = () => (
                <View>
                    <Text>Home Screen</Text>
                </View>
                );

                export default function App(props) {
                return (
                    <View style={styles.container}>
                    <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen name='Root' component={HomeScreen} />
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
                });
                ```
            - 切换页面Demo
                - Tips:
                    -  `onPress={() => navigation.navigate("Details")}`  跳转到名为`Details`的页面，如果该页面不存在则入栈一个该页面
                    - `onPress={() => navigation.push("Details")}`  入栈一个名为`Details`的页面
                    - `onPress={() => navigation.goBack()}`顶层页面出栈，即返回上一页
                    - `onPress={() => navigation.popToTop()}`前往堆栈的第一个页面，即返回首页
              - ```JSX
                import "react-native-gesture-handler";
                import * as React from "react";
                import { View, Text, StyleSheet, Button } from "react-native";
                import { NavigationContainer } from "@react-navigation/native";
                import { createStackNavigator } from "@react-navigation/stack";

                const Stack = createStackNavigator();

                const HomeScreen = ({ navigation }) => (
                <View style={styles.center}>
                    <Text>Home Screen</Text>
                    <Button
                    title='Go to Details'
                    onPress={() => navigation.navigate("Details")}
                    />
                </View>
                );

                const DetailsScreen = ({ navigation }) => (
                <View style={styles.center}>
                    <Text>Details Screen</Text>
                    <Button title='Go Home' onPress={() => navigation.navigate("Home")} />
                </View>
                );

                export default function App(props) {
                return (
                    <View style={styles.container}>
                    <NavigationContainer>
                        <Stack.Navigator>
                        <Stack.Screen name='Home' component={HomeScreen} />
                        <Stack.Screen name='Details' component={DetailsScreen} />
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
                    alignItems: "center",
                    justifyContent: "center",
                },
                });
                ```
            - 导航传参Demo
                - ### Tips:
                    - 写入的参数是以json格式保存的
                    - 页面一定要提前预设好参数 "页面预设参数"
                    - `Math.floor(x)`返回小于等于x的最大整数，所有浏览器都支持的js
                    - `function DetailsScreen({ route, navigation }){....}`定义页面时候记得引入`route`
                - 点击事件中写入参数（部分代码）
                    ```JSX      
                    <Button
                    title="Go to Details"
                    onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: '任何参数',
                    });
                    }}
                    />
                    ```
                - 详情页中获取参数（部分代码）
                    ```JSX
                    function DetailsScreen({ route, navigation }) {
                    /* 获取参数 */
                    const { itemId } = route.params;
                    const { otherParam } = route.params;
                    return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Details Screen</Text>
                        <Text>itemId: {JSON.stringify(itemId)}</Text>
                        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                        <Button
                            title="Go to Details... again"
                            onPress={() =>
                            navigation.push('Details', {
                                itemId: Math.floor(Math.random() * 100),
                            })
                            }
                        />
                        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
                        <Button title="Go back" onPress={() => navigation.goBack()} />
                        </View>
                    );
                    }
                    ```
                -