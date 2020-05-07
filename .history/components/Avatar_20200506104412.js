import React from "react";
import style from "styled-components";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: " https://s2.ax1x.com/2020/01/27/1uS1Gn.jpg",
  };
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;
const Image = styled.Image`
  width: 44px;
  height: 44px;
`;
