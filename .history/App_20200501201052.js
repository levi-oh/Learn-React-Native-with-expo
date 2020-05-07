import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/card";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <TitleBar>
          <Avatar source={require("./assets/head.png")} />

          <Title>Welcome back!</Title>
          <Name>Levi</Name>
        </TitleBar>

        <SubTitle>Hello My New World!</SubTitle>
        <ScrollView
          style={{ paddingHorizontal: 12 }}
          horizontal={false}
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
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
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
    image: require("./assets/background.jpg"),
    logo: require("./assets/logo.png"),
    caption: "React Native",
    subtitle: "1 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("./assets/background1.jpg"),
    logo: require("./assets/logo1.jpg"),
    caption: "React Native",
    subtitle: "2 of 12 sections",
  },
  {
    title: "Styled Components",
    image: require("./assets/background2.jpg"),
    logo: require("./assets/logo2.jpg"),
    caption: "React Native",
    subtitle: "3 of 12 sections",
  },
];
