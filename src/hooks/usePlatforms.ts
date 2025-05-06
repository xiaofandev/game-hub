import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

export interface Platform {
  id: string;
  name: string;
}

const usePlatforms = () => {
  return useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get("/platforms").then((res) => res.data.results),
  });
};

export default usePlatforms;
