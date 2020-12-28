import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import TripList from "../TripList";
import { Alert } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
    if (user.username.length == 0 || user.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty."
      );
    } else {
      if (authStore.user) {
        await authStore.signin(user);
        navigation.replace("Profile");
        console.log("helllo");
      }
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

  return (
    <AuthContainer>
      <FontAwesome name="user-o" size />
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
