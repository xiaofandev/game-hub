import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

export interface Platform {
  id: string;
  name: string;
}

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient.get("/platforms").then((res) => res.data.results);
  return useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });
};

export default usePlatforms;
