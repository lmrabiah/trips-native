import React from "react";
import { observer } from "mobx-react";
import { Button, Content, List, Text, Spinner } from "native-base";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";
import TripItem from "./TripItem";
import CreatTripModel from "./CreatTripModel";
import { useNavigation } from "@react-navigation/native";
import TripList from "./TripList";

const Explore = ({ navigation }) => {
  if (!authStore.user) navigation.replace("Signin");
  if (tripStore.loading) return <Spinner />;
  const tripsNotUser = tripStore.trips.filter(
    (trip) => trip.userId !== authStore.user.id
  );

  return (
    <Content>
      <TripList trips={tripsNotUser} navigation={navigation} />
    </Content>
  );
};

export default observer(Explore);
