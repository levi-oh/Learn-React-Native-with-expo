import React from "react";
import {
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";
import Avatar from "../components/Avatar";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    name: "Loding",
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
    this.setState({
      name: this.props.name,
    });
  }
  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, { toValue: 0.5 }).start();

      StatusBar.setBarStyle("light-content", true);
    }
    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(this.state.opacity, { toValue: 1 }).start();
      StatusBar.setBarStyle("dark-content", true);
    }
  };
  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute" }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back !</Title>
                <Name>{this.state.name}</Name>
                <Ionicons
                  name='md-notifications'
                  size={32}
                  color='#3c4560'
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{ flexDirection: "row", padding: 20, paddingLeft: 12 }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <SubTitle>Hello My New World!</SubTitle>
              <ScrollView
                style={{ paddingBottom: 20, paddingTop: 30 }}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    caption={card.caption}
                    logo={card.logo}
                    subtitle={card.subtitle}
                  />
                ))}
              </ScrollView>
              <SubTitle>Courses list!</SubTitle>
              <ScrollView>
                <Course
                  logo={require("../assets/logo.png")}
                  image={require("../assets/background2.jpg")}
                  avatar={require("../assets/logo2.jpg")}
                  title={"React For Design"}
                  subtitle={"Do something interesting!"}
                  introduce={"Just Do It!"}
                  teacher={"Levi"}
                ></Course>
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;

const cards = [
  {
    title: "Styled Components",
    image: require("../assets/background.jpg"),
    logo: require("../assets/logo.png"),
    caption: "React Native",
    subtitle: "1 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("../assets/background1.jpg"),
    logo: require("../assets/logo1.jpg"),
    caption: "React Native",
    subtitle: "2 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("../assets/background2.jpg"),
    logo: require("../assets/logo2.jpg"),
    caption: "React Native",
    subtitle: "3 of 12 sections",
  },
];
const logos = [
  {
    image: require("../assets/logo.png"),
    text: "Flutter",
  },
  {
    image: require("../assets/logo1.jpg"),
    text: "Android",
  },
  {
    image: require("../assets/logo2.jpg"),
    text: "IOS",
  },
  {
    image: require("../assets/logo.png"),
    text: "Windows",
  },
];
