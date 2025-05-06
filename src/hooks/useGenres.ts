import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {
  const fetchGenres = async () => apiClient.get('/genres').then((res => res.data.results));
  return useQuery<Genre[], Error>({queryKey: ["genres"], queryFn: fetchGenres});
};

export default useGenre;
