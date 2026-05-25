import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function GameCard({ item }) {

  return (
    <View
      style={{
        backgroundColor: "#1f2937",
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
      }}
    >

      <Image
        source={{ uri: item.imagen }}
        style={{
          width: "100%",
          height: 180,
          borderRadius: 15,
          marginBottom: 10,
        }}
      />

      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {item.nombre}
      </Text>

      <Text style={{ color: "#cbd5e1" }}>
        {item.descripcion}
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL(item.link)}
        style={{
          backgroundColor: "#38bdf8",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Ver Juego
        </Text>
      </TouchableOpacity>

    </View>
  );
}