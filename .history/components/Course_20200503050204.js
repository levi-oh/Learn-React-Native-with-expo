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
      <Teacher>Auther by{props.teacher}</Teacher>
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
  justify-content: flex-end;
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
  left: 50%;
  margin-left: -24px;
`;
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 170px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 20px;
`;
const Content = styled.View`
  padding-left: 62px;
  height: 75px;
  justify-content: center;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Introduce = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;
const Teacher = styled.Text``;
