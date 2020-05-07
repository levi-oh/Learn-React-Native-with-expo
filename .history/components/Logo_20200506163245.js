import React from "react";
import styled from "styled-components";

const Logo = (props) => (
  <Continer>
    <Image source={props.image} resizeMode='contain' />
    <Text>{props.text}</Text>
  </Continer>
);

export default Logo;

const Continer = styled.View`
  flex-direction: row;
  background: yellowgreen;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  align-items: center;
  margin: 0 8px;
`;
const Image = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 2px;
`;
const Text = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-left: 8px;
`;
