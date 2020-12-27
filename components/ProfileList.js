import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import profileStore from "../stores/profileStore";

import { observer } from "mobx-react";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import EditProflieButton from "./Buttons/EditProflieButton";

const ProfileList = ({ navigation }) => {
  // const profileList = profileStore.profiles.map((profile) => (
  //   <ProfileItem navigation={navigation} profile={profile} key={profile.id} />
  // ));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri:
                "https://www.trunqd.com/uploadimages/postimages/7vx3r8h1.jpg",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              username
            </Title>
            <Caption style={styles.caption}>Bio</Caption>
          </View>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title>total trips</Title>
          {/* <Title>{user.trips * trips.quantity} </Title> */}
          <Caption> numbers of trips </Caption>
        </View>
      </View>
      <EditProflieButton />
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
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
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
