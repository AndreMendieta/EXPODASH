import { TextInput } from "react-native";

export default function SearchBar({
  busqueda,
  setBusqueda,
}) {
  return (
    <TextInput
      placeholder="Buscar juego..."
      placeholderTextColor="#9ca3af"
      value={busqueda}
      onChangeText={setBusqueda}
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: 15,
        borderRadius: 14,
        marginBottom: 15,
      }}
    />
  );
}