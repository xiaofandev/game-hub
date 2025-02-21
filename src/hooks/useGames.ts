import { QueryGame } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (queryGame: QueryGame) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: queryGame.genre?.id,
        platforms: queryGame.platform?.id,
        ordering: queryGame.ordering,
        search: queryGame.search,
      },
    },
    [queryGame]
  );
};

export default useGames;
