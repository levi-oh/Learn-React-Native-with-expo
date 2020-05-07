import React from "react";
import styled from "styled-components";

class Menu extends React.Component {
  render() {
    return (
      <Container>
        <Cover></Cover>
        <Content></Content>
      </Container>
    );
  }
}

export default Menu;

const Container = styled.view;

const Cover = styled.View;

const Content = styled.View;
