import { Icon, Text } from "native-base";
import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;
export const OverLayContainer = styled.View`
  flex: 1;
`;
export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20;
  color: #fff;
`;
export const ButcheryItemStyled = styled.Text`
  color: ${(props) => props.theme.mainColor};
  font-size: 18;
  font-weight: bold;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 16;
  width: 100%;
`;

export const ButcheryDetailWrapper = styled.View`
  margin-top: 50;
`;

export const ButcheryDetailImage = styled.Image`
  width: 150;
  height: 150;
`;

export const ButcheryDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40;
`;
export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
export const CartButtonStyled = styled(Icon)`
  color: ${(props) => props.theme.backgroundColor};
  margin-right: 10px;
`;
export const CartTextStyled = styled(Text)`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;
export const TrashIcon = styled(Icon)`
  color: ${(props) => props.theme.red};
`;
export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #84cca2;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AddButtonText = styled.Text`
  color: white
  font-weight: bold;
  font-size: 14px;
`;
export const AddButton = styled.TouchableOpacity`
  align-items: center;
  padding: 15px;
  background-color: red;
  margin-top: 10px;
`;
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #ffffff
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.pink};
`;
export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: orange;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AuthOther = styled.Text`
  color: red;
  margin-top: 15px;
`;
