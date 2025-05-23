import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
