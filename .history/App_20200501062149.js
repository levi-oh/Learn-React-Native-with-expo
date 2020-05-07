import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Test</Text>
        <Name>Levi</Name>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  justify-content: center;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
