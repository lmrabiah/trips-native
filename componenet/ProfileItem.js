import React from "react";
import { View, Text } from "react-native";
import { ListItem } from " native-base";

const ProfileItem = ({ profile }) => {
  return (
    <ListItem>
      <Text>{profile}</Text>
    </ListItem>
  );
};

export default ProfileItem;
