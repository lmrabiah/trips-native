import { observer } from "mobx-react";

import React from "react";

// Styling
import { Text, View } from "react-native";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{
        uri: "https://www.trunqd.com/uploadimages/postimages/7vx3r8h1.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Trips</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => navigation.navigate("Explore")}>
            Explore Trips
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);
