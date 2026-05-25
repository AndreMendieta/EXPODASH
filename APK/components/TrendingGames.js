import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import { useEffect, useState } from "react";

export default function TrendingGames() {

  const [games, setGames] = useState([]);

  useEffect(() => {

    obtenerJuegos();

  }, []);

  const obtenerJuegos = async () => {

    try {

      const response = await fetch(
        "https://www.freetogame.com/api/games"
      );

      const data = await response.json();

      setGames(data.slice(0, 10));

    } catch(error) {

      console.log(error);

    }
  };

  return (

    <View
      style={{
        marginBottom: 30,
      }}
    >

      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        🔥 Trending Free Games
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {games.map((item) => (

          <TouchableOpacity
            key={item.id}

            onPress={() =>
              Linking.openURL(item.game_url)
            }

            style={{
              width: 260,
              marginRight: 15,
              backgroundColor: "#1f2937",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >

            <Image
              source={{
                uri: item.thumbnail,
              }}

              style={{
                width: "100%",
                height: 150,
              }}
            />

            <View style={{ padding: 12 }}>

              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  color: "#38bdf8",
                  marginTop: 5,
                }}
              >
                🎮 {item.genre}
              </Text>

              <Text
                style={{
                  color: "#94a3b8",
                  marginTop: 5,
                }}
              >
                {item.platform}
              </Text>

            </View>

          </TouchableOpacity>

        ))}

      </ScrollView>

    </View>
  );
}