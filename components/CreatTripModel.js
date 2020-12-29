import { View, Text, Button, Image } from "react-native";
import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import tripStore from "../stores/tripStore";
import {
  AuthContainer,
  AuthButton,
  AuthButtonText,
  AuthTextInput,
} from "../styles";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import TripList from "./TripList";

const CreatTripModal = ({ navigation }) => {
  const [trip, setTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = async () => {
    await tripStore.creatTrip(trip);
    if (tripStore.trip) {
      navigation.navigate("Profile");
    }
    console.log(creatTrip);
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
          onChangeText={(title) => setTrip({ ...trip, title })}
          placeholder="Title"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
        <AuthTextInput
          onChangeText={(description) => setTrip({ ...trip, description })}
          placeholder="Description"
          placeholderTextColor="#A6AEC1"
          autoCapitalize="none"
        />
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
          <AuthButtonText> creat a new trip </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(CreatTripModal);
