import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class CoursesScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Courses Screen</Text>
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

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;
