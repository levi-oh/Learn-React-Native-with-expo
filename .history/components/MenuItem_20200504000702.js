import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = (props) => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} />
    </IconView>
  </Container>
);
