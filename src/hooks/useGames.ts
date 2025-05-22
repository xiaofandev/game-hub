import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import useQueryParamStore from "../store";
import { removeEmptyProperties } from "../utils/ObjectUtils";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const queryParam = useQueryParamStore((s) => s.queryParam);
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
