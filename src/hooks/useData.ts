import { QueryKey, useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

interface FetchResponse<T> {
  results: T[];
}

const useData = <T>(cachekey: QueryKey, endpoint: string, params?: any) => {
  return useQuery<T[], Error>({
    queryKey: cachekey,
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, { params })
        .then((res) => res.data.results),
  });
};

export default useData;
