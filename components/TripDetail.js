import React from "react";
import { observer } from "mobx-react";
import { Image, Text } from "react-native";
import tripStore from "../stores/tripStore";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import authStore from "../stores/authStore";
import { ListItem, Right, Left, Button } from "native-base";
import TripList from "./TripList";
import UpdateTripModel from "./UpdateTripModel";

function TripDetail({ route, navigation }) {
  // const store = storeStore.stores[2];
  const { trip } = route.params;
  if (tripStore.loading) return <Spinner />;
  const handlePress = () => {
    tripStore.deleteTrip(trip.id);
    navigation.navigate("TripList");
  };

  //   {
  //     if (authStore.user) () => tripStore.deleteTrip(trip.id);
  //     else {
  //       Alert.alert(
  //         "Signin",
  //         "You need to sign in before seeing the cart",
  //         [
  //           {
  //             text: "Cancel",
  //             onPress: () => console.log("Cancel Pressed"),
  //             style: "cancel",
  //           },
  //           { text: "Signin", onPress: () => navigation.navigate("Signin") },
  //         ],
  //         { cancelable: false }
  //       );
  //     }
  //   };
  return (
    <ListItem>
      <Right>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: trip.image }}
        />
      </Right>

      <Left>
        <Text>{trip.title}</Text>

        <Text>{trip.decription}</Text>
        <Button onPress={handlePress}>
          <Text>Delete </Text>
        </Button>
        <Button
          onPress={() =>
            navigation.navigate(
              "UpdateTripModel",
              { navigation: navigation },
              { OldTrip: trip }
            )
          }
        >
          <Text>Update Trip </Text>
        </Button>
      </Left>
    </ListItem>
  );
}

export default observer(TripDetail);
