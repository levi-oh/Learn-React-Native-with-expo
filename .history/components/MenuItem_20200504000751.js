import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MenuItem = (props) => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color='#546bfb' />
    </IconView>
  </Container>
);
