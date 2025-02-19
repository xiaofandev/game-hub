import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
}

interface GenreListResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GenreListResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
