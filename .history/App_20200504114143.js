import React from "react";
import { creatStore } from "redux";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";

const App = () => (
  <Provider>
    <HomeScreen></HomeScreen>
  </Provider>
);

export default App;
