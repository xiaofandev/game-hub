import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data.results),
  });
};

export default useGenre;
