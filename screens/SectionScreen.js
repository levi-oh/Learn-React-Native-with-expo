import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

function SectionScreen({ route, navigation }) {
  const { section } = route.params;

  return (
    <Container>
      <Cover>
        <Image source={section.image} />
        <Title>{section.title}</Title>
      </Cover>
    </Container>
  );
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Cover = styled.View``;
const Title = styled.Text``;

const Image = styled.Image`
  height: 400px;
  width: 300px;
`;
