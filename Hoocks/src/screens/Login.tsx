import { useEffect, useState } from "react";
import { Alert, Image } from "react-native";
import {
  Container,
  ContainerButton,
  ContainerIcon,
  ContainerInputs,
  Input,
  Label,
} from "./Styles";

const Login = () => {
  const [username, setUsername] = useState("Email:");
  const [password, setPassword] = useState("Senha:");

//   useEffect(() => {
//     if (password && password.length > 3) setPassword("");
//   });

  const showLogedAlert = () => {
    console.log("OIiiii");
  };
  return (
    <Container>
      <ContainerIcon>
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../../assets/image.png")}
        />
      </ContainerIcon>
      <ContainerInputs>
        <Input onChangeText={setUsername} value={username} />
        <Input onChangeText={setPassword} value={password} />
      </ContainerInputs>
      <ContainerButton onPress={showLogedAlert}>
        <Label>Entrar</Label>
      </ContainerButton>
    </Container>
  );
};

export default Login;
