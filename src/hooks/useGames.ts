import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { OrderBy } from "../components/SortingSelector";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";
import { removeEmptyProperties } from "../utils/ObjectUtils";
import APIClient from "../api/apiClient";

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

const apiClient = new APIClient<Game>("/games");

const useGames = (queryParam: QueryParam) => {
  const params = {
    ordering: queryParam.orderBy?.value,
    platforms: queryParam.platform?.id,
    genres: queryParam.genre?.id,
    search: queryParam.searchText,
  };

  const noneEmptyValueParams = removeEmptyProperties(params);

  const pageSize = 20;
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", noneEmptyValueParams],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          ...noneEmptyValueParams,
          page: pageParam,
          page_size: pageSize,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
  });
};

export default useGames;
