import Home from "../Home";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ProfileList from "../../components/ProfileList";

import EditProfileModel from "../EditProfileModel";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Profile"
        component={ProfileList}
        options={{ headerShown: false }}
      />
      <Screen
        name="EditProfile"
        component={EditProfileModel}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
export default RootNavigator;
