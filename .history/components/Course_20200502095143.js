import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Logo sources={props.logo} />
      <Title></Title>
      <Subtitle></Subtitle>
    </Cover>
    <Content>
      <Image source={props.image} />
      <Introduce></Introduce>
      <Teacher></Teacher>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View``;
const Cover = styled.View``;
const Logo = styled.Image``;
const Title = styled.Text``;
const Subtitle = styled.Text``;
const Image = styled.Image``;
const Introduce = styled.Text``;
const Teacher = styled.Text``;
