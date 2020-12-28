import Home from "../Home";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ProfileList from "../ProfileList";
import TripList from "../TripList";
import ShowTripsButton from "../Buttons/ShowTripsButton";
import TripDetail from "../TripDetail";
import EditProfileModel from "../EditProfileModel";
import authStore from "../../stores/authStore";
import CreatTripModel from "../CreatTripModel";
import HomeButton from "../Buttons/HomeButton";
import UpdateTripModel from "../UpdateTripModel";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      profile
      initialRouteName="Signin"
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
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Signup",
          headerRight: () => <ShowTripsButton />,
          headerLeft: () => <HomeButton />,
        }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Signin",
          headerRight: () => <ShowTripsButton />,
          headerLeft: () => <HomeButton />,
        }}
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
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
            title: "profile list ",
          },
          //   options={({ route }) => {
          //     const { profile } = route.params;
          //     return {
          //       title: trip.title,
          //   headerRight: () => <ShowTripsButton />,
          //   headerLeft: () => <HomeButton />,
        }}
      />
      <Screen
        name="EditProfile"
        component={EditProfileModel}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Edit ProfileModel ",
          headerRight: () => <ShowTripsButton />,
          headerLeft: () => <HomeButton />,
        }}
      />
      <Screen
        name="TripList"
        component={TripList}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Trips",
          headerRight: () => <ShowTripsButton />,
          headerLeft: () => <HomeButton />,
        }}
      />

      <Screen
        name="TripDetail"
        component={TripDetail}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
            headerRight: () => <ShowTripsButton />,
          };
        }}
      />

      <Screen
        name="CreatTripModel"
        component={CreatTripModel}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Trips",
          headerRight: () => <ShowTripsButton />,
        }}
      />
      <Screen
        name="UpdateTripModel"
        component={UpdateTripModel}
        options={{
          headerStyle: {
            backgroundColor: "#ffd1dc",
          },
          title: "Trips",
          headerRight: () => <ShowTripsButton />,
        }}
      />
    </Navigator>
  );
};
export default RootNavigator;
