import React from "react";
import styled from "styled-components";

const Course = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Introduce>{props.introduce}</Introduce>
      <Teacher>{props.teacher}</Teacher>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  width: 335px;
  height: 335px;
  border-radius: 15px;
  margin: 10px 20px;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.33);
`;
const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
const Logo = styled.Image`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 90px;
  left: 0;
`;
const Title = styled.Text``;
const Subtitle = styled.Text``;
const Content = styled.View``;
const Avatar = styled.Image``;

const Introduce = styled.Text``;
const Teacher = styled.Text``;
