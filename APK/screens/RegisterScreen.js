import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import auth from "../services/auth";

export default function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Alert.alert(
        "Cuenta creada 🔥"
      );

      navigation.navigate("Login");

    } catch(error) {

      Alert.alert(error.message);

    }
  };

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#0f172a",
      }}
    >

      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        🔥 Registro
      </Text>

      <TextInput
        placeholder="Correo"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 10,
        }}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#94a3b8"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          backgroundColor: "#1f2937",
          color: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={registrar}
        style={{
          backgroundColor: "#22c55e",
          padding: 15,
          borderRadius: 12,
        }}
      >

        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Crear Cuenta
        </Text>

      </TouchableOpacity>

    </View>
  );
}