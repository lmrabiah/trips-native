import React from "react";
import { Text, View } from "native-base";
import EditProflieButton from "../components/Buttons/EditProflieButton";
import { observer } from "mobx-react";

const ProfileItem = ({ profile }) => {
  return (
    <>
      <Text>{profile.bio}</Text>
      <View>{profile.profileImage}</View>
      <EditProflieButton />
    </>
  );
};

export default observer(ProfileItem);
