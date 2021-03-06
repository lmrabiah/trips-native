import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Icon } from "native-base";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import TripList from "./TripList";

import { observer } from "mobx-react";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
  Button,
} from "react-native-paper";

import EditProflieButton from "./Buttons/EditProflieButton";
import profileStore from "../stores/profileStore";

const ProfileList = ({ navigation }) => {
  const tripsUser = tripStore.trips.filter(
    (trip) => trip.userId === authStore.user.id
  );
  // console.log(tripsUser);
  console.log("-----------");
  const listTrips = tripsUser;
  // console.log(listTrips.lenght);
  console.log(profileStore.userProfile);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image source={profileStore.userProfile.image} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              {authStore.user.username}
            </Title>
            <Caption style={styles.caption}>
              {profileStore.userProfile.bio}
            </Caption>
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title>total trips</Title>
          <Text> {listTrips.length} </Text>
        </View>
      </View>
      <EditProflieButton profile={profileStore.userProfile} />
      <View style={styles.container}>
        <TripList trips={tripsUser} navigation={navigation} />
        <Button>
          <Icon
            onPress={authStore.signout}
            onPress={() => navigation.replace("Home")}
            type="MaterialCommunityIcons"
            name="logout"
          />
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default observer(ProfileList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderTopColor: "white",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
