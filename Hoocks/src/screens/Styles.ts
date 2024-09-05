import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c2c2c2;
  flex: 1;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.TouchableOpacity`
  width: 89%;
  height: 70px;
  margin-top: 80px;
  border-radius: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: #262626;
`;

export const ContainerIcon = styled.View`
  background-color: #D9D9D9;
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  height: 70px;
  width: 89%;
  margin: 12px;
  border-radius: 50px;
  padding: 10px;
  background-color: #fff;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 22px;
`;
