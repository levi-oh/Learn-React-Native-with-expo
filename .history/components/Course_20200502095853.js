import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Logo sources={props.logo} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Cover>
    <Content>
      <Image source={props.image} />
      <Introduce>{props.introduce}</Introduce>
      <Teacher>{props.teacher}</Teacher>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View``;
const Cover = styled.View``;
const Logo = styled.Image``;
const Title = styled.Text``;
const Subtitle = styled.Text``;
const Content = styled.View``;
const Image = styled.Image``;
const Introduce = styled.Text``;
const Teacher = styled.Text``;
