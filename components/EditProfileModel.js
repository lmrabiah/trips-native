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

const EditProfileModel = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    bio: "",
  });

  const handleSubmit = async () => {
    await profileStore.updateProfile(profiles);
    if (profileStore.profiles) navigation.navigate("Profile");
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

        <AuthButton onPress={handleSubmit}>
          <AuthButtonText> Done </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(EditProfileModel);
