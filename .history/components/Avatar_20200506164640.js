import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}
class Avatar extends React.Component {
  state = {
    photo: "https://s2.ax1x.com/2020/01/27/1uS1Gn.jpg",
  };

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=2&emotion[]=happiness", {
      headers: new Headers({
        "X-API-KEY": "4f81734cf5e1d9a14fd88c37669230",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          photo: response[0].photo,
        });

        this.props.updateName(response[0].name);
      });
  }
  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
`;
