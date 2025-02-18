import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface GameListResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GameListResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
