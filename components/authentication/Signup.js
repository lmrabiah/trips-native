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

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    check_textInputUserName: false,
    check_textInputPassword: false,
    check_textInputfirstName: false,
    check_textInputlastName: false,
    check_textInputEmail: false,
  });
  const handleSubmit = async () => {
    // else {
    //   Alert.alert("The username already exists");

    if (user.username.length == 0 || user.firstName.length == 0) {
      {
        Alert.alert("Wrong Input!", "please fill all the field.");
      }
    } else if (user.lastName.length == 0 || user.password.length == 0) {
      Alert.alert("Wrong Input!", "please fill all the field.");
    } else if (user.email.length == 0 || user.password.length == 0) {
      Alert.alert("Wrong Input!", "please fill all the field.");
    } else {
      await authStore.signup(user);

      if (authStore.user) navigation.replace("Explore");
    }
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
    }
  };

  const textInputChangefirstName = (val) => {
    if (val.length !== 0) {
      setUser({
        ...user,
        firstName: val,
        check_textInputfirstName: true,
      });
    } else {
      setUser({
        ...user,
        firstName: val,
        check_textInputfirstName: false,
      });
    }
  };
  const textInputChangelastName = (val) => {
    if (val.length !== 0) {
      setUser({
        ...user,
        lastName: val,
        check_textInputlastName: true,
      });
    } else {
      setUser({
        ...user,
        lastName: val,
        check_textInputlastName: false,
      });
    }
  };
  const textInputChangeEmail = (val) => {
    if (val.length !== 0) {
      setUser({
        ...user,
        email: val,
        check_textInputEmail: true,
      });
    } else {
      setUser({
        ...user,
        email: val,
        check_textInputEmail: false,
      });
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
        onChangeText={(val) => textInputChange(val)}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(val) => textInputChangefirstName(val)}
        placeholder="FirstName"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(val) => textInputChangelastName(val)}
        placeholder="LastName"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(val) => textInputChangeEmail(val)}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(val) => textInputChangepassword(val)}
        placeholder="Password"
        autoCapitalize="none"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
    </AuthContainer>
  );
};

export default observer(Signup);
