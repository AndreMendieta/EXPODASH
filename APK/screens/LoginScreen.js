import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../services/auth";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigation.navigate("Home");

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
        🎮 Login
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
        onPress={login}
        style={{
          backgroundColor: "#38bdf8",
          padding: 15,
          borderRadius: 12,
        }}
      >

        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Register")
        }
        style={{
          marginTop: 20,
        }}
      >

        <Text
          style={{
            color: "#38bdf8",
            textAlign: "center",
          }}
        >
          ¿No tienes cuenta? Regístrate
        </Text>

      </TouchableOpacity>

    </View>
  );
}