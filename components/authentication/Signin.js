import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import TripList from "../TripList";
import { Alert } from "react-native";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
} from "../../styles";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    check_textInputUserName: false,
    check_textInputPassword: false,
  });
  const handleSubmit = async () => {
    await authStore.signin(user);

    if (authStore.user) {
      navigation.replace("Profile");
      console.log("helllo");

    console.log("Signin", user);

    if (authStore.user) navigation.replace("TripList");
    if (
      user.check_textInputPassword === false &&
      user.check_textInputUserName === false
    ) {
      Alert.alert("please write your password and username");
    } else if (user.check_textInputUserName === false) {
      Alert.alert("please write your username");
    } else if (user.check_textInputPassword === false) {
      Alert.alert("please write your password");
    }
  };
  // } else {
  //   Alert.alert(
  //     "please make sure you have enterd the correct username and password"
  //   );
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setUser({
        ...user,
        username: val,
        check_textInputUserName: true,
      });
    } else {
      setUser({
        ...user,
        username: val,
        check_textInputUserName: false,
      });
    }
  };

  const textInputChangepassword = (val) => {
    if (val.length !== 0) {
      setUser({
        ...user,
        password: val,
        check_textInputPassword: true,
      });
    } else {
      setUser({
        ...user,
        password: val,
        check_textInputPassword: false,
      });

    }
  };

  return (
    <AuthContainer>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signup")}>
        Click here to register!
      </AuthOther>
      <AuthTextInput
        onChangeText={(val) => textInputChange(val)}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(val) => textInputChangepassword(val)}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        // secureTextEntry={true}
        autoCapitalize="none"
      />
    </AuthContainer>
  );
};
export default observer(Signin);
