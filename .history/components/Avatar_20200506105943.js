import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://s2.ax1x.com/2020/01/27/1uS1Gn.jpg",
  };

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
`;
