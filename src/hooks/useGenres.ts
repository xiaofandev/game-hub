import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });
};

export default useGenre;
