import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { grayColor, primaryColor, textColor } from "../constants/style";
import Button from "../components/Button";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const ingresarACuenta = () => {
    console.log("hola mundo");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.iniciarSesionText}>Iniciar Sesión</Text>
      </View>
      <View style={styles.inputsView}>
        <TextInput
          style={styles.input}
          onChangeText={setUsuario}
          value={usuario}
          placeholder="Usuario..."
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          keyboardType="password"
        />
        <View style={styles.buttonView}>
          <Button onPress={ingresarACuenta} title="Ingresar" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iniciarSesionText: {
    fontSize: 50,
    fontWeight: "bold",
    color: textColor,
  },
  inputsView: {
    marginTop: 20,
    width: "90%",
    padding: "7.5%",
    borderColor: primaryColor,
    borderWidth: 1.5,
    borderRadius: 20,
  },
  input: {
    height: 40,
    textAlign: "center",
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1.5,
    color: grayColor,
    borderBottomColor: primaryColor,
  },
  buttonView: {
    marginTop: 20,
    alignSelf: "center",
  },
});
