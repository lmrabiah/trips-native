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

const UpdateTripModel = ({ navigation, OldTrip }) => {
  const [trip, setTrip] = useState({
    OldTrip,
  });

  const handleSubmit = async () => {
    await tripStore.updateTrip(trip);
    if (tripStore.trips) navigation.navigate("TripList");
  };

  const handleChange = (event) => {
    setTrip({ ...trip, [event.target.title]: event.target.value });
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
          onChangeText={handleChange}
          // placeholder="title"
          placeholderTextColor="#A6AEC1"
          // autoCapitalize="none"
          // value={trip.title}
        />
        <AuthTextInput
          //   defaultValue={selectedTrip.description}
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
          <AuthButtonText> update this trip </AuthButtonText>
        </AuthButton>
      </AuthContainer>
    </>
  );
};

export default observer(UpdateTripModel);
