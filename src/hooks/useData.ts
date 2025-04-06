import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import { CanceledError } from "axios";
import { removeEmptyProperties } from "../utils/ObjectUtils";

const useData = <T>(
  url: string,
  originalParams?: any,
  dependencies: any[] = []
) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const params = removeEmptyProperties(originalParams);
      setLoading(true);

      apiClient
        .get(url, { params, signal: controller.signal })
        .then((resp) => {
          setLoading(false);
          setData(resp.data.results);
        })
        .catch((error: Error) => {
          if (error instanceof CanceledError) {
            return;
          }
          setLoading(false);
          setError(error.message);
        });
      return () => controller.abort();
    },
    dependencies ? dependencies : []
  );
  return { data, error, isLoading };
};

export default useData;
