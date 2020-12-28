import React from "react";
import { observer } from "mobx-react";
import { Button, Content, List, Text } from "native-base";
import tripStore from "../stores/tripStore";
import TripItem from "./TripItem";
import CreatTripModel from "./CreatTripModel";

const TripList = ({ navigation, trips }) => {
  const Alltrips = trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip.id} />
  ));
  return (
    <Content>
      <List>{Alltrips}</List>
    </Content>
  );
};

export default observer(TripList);
