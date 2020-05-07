import React from "react";
import styled from "styled-components";

class SectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Section Screen</Text>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
