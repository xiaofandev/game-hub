import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

const GenreList = () => {
  const [genres, setGenres] = useState<Genre[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/genres", { signal: controller.signal })
      .then((resp) => {
        setGenres(resp.data.results);
      })
      .catch((error: Error) => {
        console.log(error);
        if (!(error instanceof CanceledError)) {
          setError(error.message);
        }
      });
    return () => controller.abort();
  }, []);
  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      <ul>
        {genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
