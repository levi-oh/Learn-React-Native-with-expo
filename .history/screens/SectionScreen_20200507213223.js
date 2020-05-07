import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class SectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Section Screen</Text>
        <Button
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          Back
        </Button>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
