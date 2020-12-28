import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
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

// clean up this component

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    // firstName: "",
    // lastName: "",
    // email: "",
    password: "",
    check_textInputUserName: false,
    check_textInputPassword: false,
  });
  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.replace("Profile");

    // else {
    //   Alert.alert("The username already exists");

    if (user.username.length == 0 || user.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty."
      );

      if (
        user.check_textInputPassword === false &&
        user.check_textInputUserName === false
      ) {
        Alert.alert("please write your password and username");
        // } else if (user.check_textInputUserName === false) {
        //   Alert.alert("please write your username");
        // } else if (user.check_textInputPassword === false) {
        //   Alert.alert("please write your password");
      }

      // } else {
      //   Alert.alert(
      //     "please make sure you have enterd the correct username and password"
      //   );
    }
  };
};

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

    // else {
    //   Alert.alert("The username already exists");

    // }
  }

  return (
    <AuthContainer>
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign Up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.replace("Signin")}>
        Click here to login!
      </AuthOther>
      <AuthTextInput
        onChangeText={(val) => textInputChange(val)}
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
        onChangeText={(val) => textInputChangepassword(val)}
        placeholder="Password"
        // autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
    </AuthContainer>
  );
};

export default observer(Signup);
