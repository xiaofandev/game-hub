import { Game } from "../components/GameList";
import { Platform } from "../components/PlatformSelector";
import { OrderBy } from "../components/SortingSelector";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface QueryParam {
  orderBy?: OrderBy;
  platform?: Platform;
  genre?: Genre;
  search?: string;
}

const useGames = (params: QueryParam) => {
  return useData<Game>(
    "/games",
    {
      ordering: params.orderBy?.value,
      parent_platforms: params.platform?.id,
      genres: params.genre?.id,
      search: params.search,
    },
    [params]
  );
};

export default useGames;
