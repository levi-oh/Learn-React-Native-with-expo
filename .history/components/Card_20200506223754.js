import React from "react";
import styled from "styled-components";
import { BoxShadow } from "react-native-shadow";

const shadowOpt = {
  width: 310,
  height: 275,
  color: "#000000",
  border: 10,
  radius: 14,
  opacity: 0.21,
  x: 0,
  y: 5,
  style: { margin: 20 },
};

const Card = (props) => (
  <BoxShadow setting={shadowOpt}>
    <Container>
      <Cover>
        <Image source={props.image} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Logo source={props.logo} />
        <Wrapper>
          <Caption>{props.caption}</Caption>
          <Subtitle>{props.subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  </BoxShadow>
);

export default Card;

const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.33);
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  border-radius: 8px;
  width: 44px;
  height: 44px;
`;
const Wrapper = styled.View`
  margin-left: 10px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
`;
