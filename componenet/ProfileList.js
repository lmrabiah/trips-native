import React from "react";
import { View, Text } from "react-native";
import profileStore from "../stores/profileStore";
import { List, Content } from "native-base";
import ProfileItem from "./ProfileItem";
import { observer } from "mobx-react";

const ProfileList = () => {
  const profileList = profileStore.profiles.map((profile) => (
    <ProfileItem profile={profile} key={profile.id} />
  ));

  return (
    <>
      <Content>
        <List>{profile}</List>
      </Content>
    </>
  );
};

export default observer(ProfileList);
