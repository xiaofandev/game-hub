import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";
import { OrderBy } from "../components/SortingSelector";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { removeEmptyProperties } from "../utils/ObjectUtils";

export interface QueryParam {
  orderBy?: OrderBy;
  platform?: Platform;
  genre?: Genre;
  searchText?: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

const useGames = (queryParam: QueryParam) => {
  return useQuery<Game[], Error>({
    queryKey: ["games", removeEmptyProperties(queryParam)],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            ordering: queryParam.orderBy?.value,
            platforms: queryParam.platform?.id,
            genres: queryParam.genre?.id,
            search: queryParam.searchText,
          },
        })
        .then((res) => res.data.results),
  });
};

export default useGames;
