import React from "react";
import { observer } from "mobx-react";
import { ListItem, Right, Left, Button } from "native-base";
import { Image, Text } from "react-native";

const TripItem = ({ trip, navigation }) => {
  console.log(trip);
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <Right>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: trip.image }}
        />
      </Right>
      <Text
        onPress={() => navigation.navigate("Guest", { userId: trip.userId })}
      >
        {/* {trip.user.username} */}
        {trip.username}
      </Text>
      <Text>{trip.title}</Text>
      <Left>
        <Text>{trip.description}</Text>
      </Left>
    </ListItem>
  );
};
export default observer(TripItem);
