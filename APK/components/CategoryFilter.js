import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function CategoryFilter({
  filtro,
  setFiltro,
}) {

  const categorias = [
    "Todos",
    "Celular",
    "Computador",
    "PlayStation",
    "Xbox",
    "Nintendo",
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 15,
      }}
    >
      {categorias.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => setFiltro(item)}
          style={{
            backgroundColor:
              filtro === item
                ? "#38bdf8"
                : "#1f2937",

            padding: 10,
            borderRadius: 12,
            marginRight: 8,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              color:
                filtro === item
                  ? "#0f172a"
                  : "white",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}