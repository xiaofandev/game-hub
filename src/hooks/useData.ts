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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const params = removeEmptyProperties(originalParams);
    setIsLoading(true);
    apiClient
      .get(url, { params, signal: controller.signal })
      .then((resp) => {
        setIsLoading(false);
        setData(resp.data.results);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        if (!(error instanceof CanceledError)) {
          setError(error.message);
        }
      });
    return () => controller.abort();
  }, dependencies);
  return { data, error, isLoading };
};

export default useData;
