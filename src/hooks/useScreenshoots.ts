import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import { Screenshoot } from "../entities/Screenshoot";

const useScreenshoots = (gameId: number) => {
  const apiClient = new APIClient<Screenshoot>(`/games/${gameId}/screenshots`);
  return useQuery<Screenshoot[], Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll({}),
  });
};

export default useScreenshoots;
