import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import News from "./src/screens/News";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    News: { screen: News }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
