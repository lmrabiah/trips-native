import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Button } from "native-base";
import { AuthButton, AuthButtonText } from "../../styles";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import TripList from "../TripList";
import authStore from "../../stores/authStore";
import Signin from "../authentication/Signin";
import CreatTripModel from "../CreatTripModel";
import EditProfileModel from "../EditProfileModel";
import UpdateTripModel from "../UpdateTripModel";

const ShowTripsButton = () => {
  const navigation = useNavigation();

  const checkAuth = () => {
    if (authStore.user) navigation.navigate("TripList");
    else {
      navigation.replace("Signin");
    }
  };

  return (
    <Container>
      <Text onPress={checkAuth}> Trips </Text>
    </Container>
  );
};

export default observer(ShowTripsButton);
