import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import RootNavigator from "./components/Navigation/index";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#papayawhip", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    <ThemeProvider theme={theme.light}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
