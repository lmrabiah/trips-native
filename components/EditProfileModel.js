import { Button, Image, Platform, View } from "react-native";
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

const EditProfileModel = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    bio: "",
  });

  // const [image, setImage] = useState(null);

  useEffect(async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setProfile({
        ...profile,
        image: { uri: localUri, name: filename, type },
      });
    }
  };

  const handleSubmit = async () => {
    await profileStore.updateProfile(profile);
    if (profileStore.profile) {
      navigation.replace("Profile");
      console.log("updateProfile");
    }
  };

  return (
    <>
      <AuthContainer>
        <AuthTextInput
          onChangeText={(name) => setProfile({ ...profile, name })}
          placeholder="Name"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
        <AuthTextInput
          onChangeText={(bio) => setProfile({ ...profile, bio })}
          placeholder="Bio"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
      </AuthContainer>
      <AuthContainer>
        <View>
          <Button title="Pick an image from camera roll" onPress={pickImage}/>
          {/* {profile.image && (<Image source={{ uri: profile.image.uri }}style={{ width: 200, height: 200 }} />)} */}
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {profile.image && (
            <Image
              source={{ uri: profile.image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {profile.image && (
          <Image
            source={{ uri: profile.image.uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <AuthButton onPress={handleSubmit}>
          <AuthButtonText> Done </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(EditProfileModel);


