import Home from "../Home";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ProfileList from "../ProfileList";
import TripList from "../TripList";
import ShowTripsButton from "../Buttons/ShowTripsButton";
import TripDetail from "../TripDetail";
import authStore from "../../stores/authStore";
import CreatTripModel from "../CreatTripModel";
import HomeButton from "../Buttons/HomeButton";
import UpdateTripModel from "../UpdateTripModel";
import ProfileGuest from "../ProfileGuest";
import Explore from "../Explore";

import UpdateProfileModel from "../UpdateProfileModel";
const { Navigator, Screen } = createStackNavigator();
const RootNavigator = ({ title }) => {
  return (
    <Navigator
      initialRouteName="Signup"
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
            backgroundColor: "orange",
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
            backgroundColor: "orange",
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
            backgroundColor: "orange",
            title: "profile list ",
          },
        }}
      />

      <Screen
        name="UpdateProfileModel"
        component={UpdateProfileModel}
        options={({ route }) => {
          const { profile } = route.params;
          return {
            headerRight: () => <ShowTripsButton />,
            title: "Update profile",
          };
        }}
      />
      <Screen
        name="Explore"
        component={Explore}
        options={{
          headerStyle: {
            backgroundColor: "orange",
          },
          title: "Explore",
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
            backgroundColor: "orange",
          },
          title: "Creat new trip",
          headerRight: () => <ShowTripsButton />,
        }}
      />

      <Screen
        name="UpdateTripModel"
        component={UpdateTripModel}
        options={({ route }) => {
          const { trip } = route.params;
          return {
            title: trip.title,
            headerRight: () => <ShowTripsButton />,
          };
        }}
      />

      <Screen
        name="Guest"
        component={ProfileGuest}
        // options={({ route }) => {
        //   const { profile } = route.params;
        //   return {
        //     title: "profile",
        //     headerRight: () => <ShowTripsButton />,
        //   };
        // }}
      />
    </Navigator>
  );
};
export default RootNavigator;
