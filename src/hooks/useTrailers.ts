import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import { Trailer } from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<Trailer[], Error>({
    queryKey: ["trailers", gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useTrailers;
