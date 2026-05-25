import { ScrollView, Text } from "react-native";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import GameCard from "../components/GameCard";
import GameDNA from "../components/GameDNA";
import TrendingGames from "../components/TrendingGames";

export default function HomeScreen() {

  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("Todos");

  const juegos = [

    {
      id: 1,
      nombre: "Minecraft",
      plataforma: "Computador",
      descripcion: "Construye y explora mundos infinitos.",
      link: "https://minecraft.net",
      imagen:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    },

    {
      id: 2,
      nombre: "Fortnite",
      plataforma: "Computador",
      descripcion: "Battle Royale competitivo.",
      link: "https://epicgames.com",
      imagen:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },

    {
      id: 3,
      nombre: "Free Fire",
      plataforma: "Celular",
      descripcion: "Shooter rápido y competitivo.",
      link: "https://play.google.com",
      imagen:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    },

    {
      id: 4,
      nombre: "Valorant",
      plataforma: "Computador",
      descripcion: "Shooter táctico online.",
      link: "https://playvalorant.com",
      imagen:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },

    {
      id: 5,
      nombre: "GTA V",
      plataforma: "PlayStation",
      descripcion: "Mundo abierto lleno de acción.",
      link: "https://rockstargames.com",
      imagen:
        "https://images.unsplash.com/photo-1511882150382-421056c89033",
    },

    {
      id: 6,
      nombre: "EA FC 24",
      plataforma: "PlayStation",
      descripcion: "El mejor simulador de fútbol.",
      link: "https://ea.com",
      imagen:
        "https://images.unsplash.com/photo-1508098682722-e99c643e7485",
    },

    {
      id: 7,
      nombre: "Halo Infinite",
      plataforma: "Xbox",
      descripcion: "Acción futurista multijugador.",
      link: "https://xbox.com",
      imagen:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },

    {
      id: 8,
      nombre: "Forza Horizon",
      plataforma: "Xbox",
      descripcion: "Carreras en mundo abierto.",
      link: "https://xbox.com",
      imagen:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },

    {
      id: 9,
      nombre: "Mario Kart",
      plataforma: "Nintendo",
      descripcion: "Diversión arcade con amigos.",
      link: "https://nintendo.com",
      imagen:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },

    {
      id: 10,
      nombre: "Zelda",
      plataforma: "Nintendo",
      descripcion: "Explora un reino mágico.",
      link: "https://nintendo.com",
      imagen:
        "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42",
    },

    {
      id: 11,
      nombre: "PUBG Mobile",
      plataforma: "Celular",
      descripcion: "Sobrevive en intensas batallas.",
      link: "https://play.google.com",
      imagen:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },

    {
      id: 12,
      nombre: "Clash Royale",
      plataforma: "Celular",
      descripcion: "Estrategia rápida en tiempo real.",
      link: "https://play.google.com",
      imagen:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },

  ];

  const juegosFiltrados = juegos.filter(
    (j) =>
      j.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtro === "Todos" || j.plataforma === filtro)
  );

  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#020617",
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >

      <Text
        style={{
          color: "white",
          fontSize: 38,
          fontWeight: "bold",
          marginTop: 40,
        }}
      >
        🎮 ExpoDash
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 5,
          marginBottom: 25,
          fontSize: 16,
        }}
      >
        Descubre videojuegos épicos y tendencias gamer
      </Text>

      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <CategoryFilter
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <GameDNA />

      <TrendingGames />

      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 10,
        }}
      >
        🔥 Juegos Recomendados
      </Text>

      {juegosFiltrados.map((item) => (
        <GameCard
          key={item.id}
          item={item}
        />
      ))}

    </ScrollView>
  );
}