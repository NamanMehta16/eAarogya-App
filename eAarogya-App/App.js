import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import signupScreen from "./src/Screen/signupScreen";
import signinScreen from "./src/Screen/signinScreen";
import signupdetailScreen from "./src/Screen/signupdetailScreen";
import reportScreen from "./src/Screen/reportScreen";
import permissionScreen from "./src/Screen/permissionScreen";
import otpverificationScreen from "./src/Screen/otpverificationScreen";
import accountScreen from "./src/Screen/accountScreen";

import { FontAwesome } from "@expo/vector-icons";

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    signin: signinScreen,
    signup: signupScreen,
    signupDetail: signupdetailScreen,
    OtpVerification: otpverificationScreen,
  }),
  mainFlow: createBottomTabNavigator({
    report: {
      screen: reportScreen,
      navigationOptions: {
        tabBarLabel: "Reports",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="file-text" size={24} color="black" />
        ),
      },
    },
    permission: {
      screen: permissionScreen,
      navigationOptions: {
        tabBarLabel: "Permissions",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="ticket" size={24} color="black" />
        ),
      },
    },
  }),
});
const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
