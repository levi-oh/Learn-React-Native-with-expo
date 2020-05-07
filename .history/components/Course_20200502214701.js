import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo sources={props.logo} />
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Cover>
    <Content>
      <Introduce>{props.introduce}</Introduce>
      <Teacher>{props.teacher}</Teacher>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  width: 300px;
  height: 400px;
  border-radius: 15px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.33);
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;
const Image = styled.Image``;
const Logo = styled.Image``;
const Title = styled.Text``;
const Subtitle = styled.Text``;
const Content = styled.View``;

const Introduce = styled.Text``;
const Teacher = styled.Text``;
