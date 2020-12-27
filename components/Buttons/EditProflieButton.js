import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import { Container, Header, Content, Button } from "native-base";
import { AuthButton, AuthButtonText } from "../../styles";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

const EditProflieButton = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <AuthButton>
        <AuthButtonText onPress={() => navigation.navigate("EditProfile")}>
          {" "}
          Edit Profile{" "}
        </AuthButtonText>
      </AuthButton>
    </Container>
  );
};

export default observer(EditProflieButton);
