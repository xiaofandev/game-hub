import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { ul } from "framer-motion/client";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface GameListResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>();
  useEffect(() => {
    apiClient
      .get<GameListResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      });
  }, []);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
