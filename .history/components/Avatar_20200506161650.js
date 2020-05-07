import React from "react";
import styled from "styled-components";

class Avatar extends React.Component {
  state = {
    photo: "https://s2.ax1x.com/2020/01/27/1uS1Gn.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api", {
      headers: new Headers({
        "X-API-KEY": "4f81734cf5e1d9a14fd88c37669230",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("API返回的json:");
        console.log(response);
        this.setState({
          photo: response.photo,
        });
      });
  }
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
