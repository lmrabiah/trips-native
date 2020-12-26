import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Button } from "native-base";
import { AuthButton, AuthButtonText } from "../../styles";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import Home from "../Home";

import CreatTripModel from "../CreatTripModel";
const ShowTripsButton = () => {
  const navigation = useNavigation();

  const checkAuth = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <Text onPress={checkAuth}> Home </Text>
    </Container>
  );
};

export default observer(ShowTripsButton);
