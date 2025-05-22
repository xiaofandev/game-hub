import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");
const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });
};

export default usePlatforms;
