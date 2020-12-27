import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
} from "../../styles";
import Home from "../Home";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Profile");


    else {
      Alert.alert("The username already exists");
    }

  };

  return (
    <AuthContainer>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign Up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signin")}>
        Click here to login!
      </AuthOther>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="FirstName"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="LastName"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Email"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
    </AuthContainer>
  );
};

export default observer(Signup);
