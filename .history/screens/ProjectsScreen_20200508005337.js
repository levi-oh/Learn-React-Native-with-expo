import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class ProjectsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Projects Screen</Text>
        <Button
          title='Back'
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </Container>
    );
  }
}

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
