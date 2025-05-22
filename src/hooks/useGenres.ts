import { useQuery } from "@tanstack/react-query";
import APIClient from "../api/apiClient";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenre = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });
};

export default useGenre;
