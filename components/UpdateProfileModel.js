import { View, Text, Button, Image } from "react-native";
import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import profileStore from "../stores/profileStore";
import {
  AuthContainer,
  AuthButton,
  AuthButtonText,
  AuthTextInput,
} from "../styles";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import TripList from "./TripList";

const UpdateProfileModel = ({ route, navigation }) => {
  const { profile } = route.params;

  const [updateProfile, setUpdateProfile] = useState(profile);

  const handleSubmit = async () => {
    await profileStore.updateProfile(updateProfile);
    navigation.replace("Profile");
    console.log("updateProfile");
  };

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <AuthContainer>
        <Text>Edit your Bio</Text>
        <AuthTextInput
          value={updateProfile.bio}
          onChangeText={(bio) => setUpdateProfile({ ...updateProfile, bio })}
        />
        {/* <AuthTextInput
          value={updateProfile.image}
          onChangeText={(image) =>
            setUpdateProfile({ ...updateProfile, image })
          }
        /> */}
      </AuthContainer>

      <AuthContainer>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>

        <AuthButton onPress={handleSubmit}>
          <AuthButtonText> update this profile </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(UpdateProfileModel);
