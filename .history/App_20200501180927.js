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
          {titles.map((title, index) => (
            <Title key={index}>{title.text}</Title>
          ))}
          <Name>Levi</Name>
        </TitleBar>

        <SubTitle>Hello My New World!</SubTitle>
        <ScrollView style={{ padding: 20 }}>
          {cards.map((cc, index) => (
            <Card key={index} />
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

const titles = [
  {
    text: "Welcome  back!",
  },
  {
    text: "Welcome  to here!",
  },
  {
    text: "Good bey !",
  },
];

const cards = [{ cc: 1 }, { cc: 2 }, { cc: 3 }, { cc: 10 }, { cc: 100 }];
