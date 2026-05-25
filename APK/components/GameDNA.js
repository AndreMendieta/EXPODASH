import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useState } from "react";

export default function GameDNA() {

  const [mood, setMood] = useState("");

  const colores = {
    competitivo: "#ef4444",
    chill: "#22c55e",
    aventura: "#3b82f6",
  };

  return (

    <View
      style={{
        backgroundColor:
          colores[mood] || "#1f2937",

        padding: 20,
        borderRadius: 25,
        marginBottom: 20,
      }}
    >

      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        🧬 Game DNA
      </Text>

      <Text
        style={{
          color: "#e2e8f0",
          marginBottom: 15,
        }}
      >
        ¿Qué tipo de jugador eres hoy?
      </Text>

      <TouchableOpacity
        onPress={() =>
          setMood("competitivo")
        }

        style={{
          backgroundColor: "#ef4444",
          padding: 12,
          borderRadius: 15,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          🔥 Competitivo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setMood("chill")
        }

        style={{
          backgroundColor: "#22c55e",
          padding: 12,
          borderRadius: 15,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white" }}>
          🌿 Chill
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setMood("aventura")
        }

        style={{
          backgroundColor: "#3b82f6",
          padding: 12,
          borderRadius: 15,
        }}
      >
        <Text style={{ color: "white" }}>
          ⚔️ Aventura
        </Text>
      </TouchableOpacity>

      {mood !== "" && (
        <Text
          style={{
            color: "white",
            marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Tu ADN Gamer:
          {" "}

          {mood === "competitivo" &&
            "Dominante"}

          {mood === "chill" &&
            "Relajado"}

          {mood === "aventura" &&
            "Explorador"}
        </Text>
      )}

    </View>
  );
}