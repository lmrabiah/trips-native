import React from "react";
import { observer } from "mobx-react";
import { Button, Content, List, Text, Spinner } from "native-base";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";
import TripItem from "./TripItem";
import CreatTripModel from "./CreatTripModel";
import { useNavigation } from "@react-navigation/native";

const TripList = ({ trips, navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (tripStore.loading) return <Spinner />;

  const tripList = trips
    ? trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ))
    : tripStore.trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} navigation={navigation} />
      ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
