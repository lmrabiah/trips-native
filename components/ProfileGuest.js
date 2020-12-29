import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import profileStore from "../stores/profileStore";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import TripList from "./TripList";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Button,
} from "react-native-paper";
const ProfileGuest = ({ navigation, route }) => {
  const { userId } = route.params;
  const profile = profileStore.profiles.find(
    (profile) => profile.userId === userId
  );
  // console.log(profileStore.profiles);
  const tripsUser = tripStore.trips.filter((trip) => trip.userId === userId);
  // console.log(userId);
  const listTrips = tripsUser;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image source={{ uri: profile.image }} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              {profile.user.username}
            </Title>
            <Caption style={styles.caption}>{profile.bio}</Caption>
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title>total trips</Title>
          {/* <Text> {listTrips.length} </Text> */}
        </View>
      </View>
      <View style={styles.container}>
        <TripList trips={tripsUser} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileGuest;

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
