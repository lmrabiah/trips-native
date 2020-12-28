import React from "react";
import { observer } from "mobx-react";
import { Button, Content, List, Text } from "native-base";
import tripStore from "../stores/tripStore";
import TripItem from "./TripItem";
import CreatTripModel from "./CreatTripModel";
import authStore from "../stores/authStore";

const Explore = ({ navigation }) => {
  const Alltrips = tripStore.trips.map((trip) => (
    <TripItem navigation={navigation} trip={trip} key={trip.id} />
  ));
  return (
    <Content>
      <List>{Alltrips}</List>
    </Content>
  );
};

export default observer(Explore);

// const Explore = ({ navigation }) => {
//   const allTrips = tripStore.trips.filter(
//     (trip) => trip.userId !== authStore.user.id
//   );
//   //   const allTrips = filteredtrips.map((trip) => (
//   <TripItem navigation={navigation} trip={trip} />;
//   console.log(allTrips);
//   return (
//     <Content>
//       <List>{allTrips}</List>
//       <Button
//         onPress={() =>
//           navigation.navigate("CreatTripModel", { navigation: navigation })
//         }
//       >
//         <Text> Creat new trip</Text>
//       </Button>
//     </Content>
//   );
// };
// export default observer(Explore);
