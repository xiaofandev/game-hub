import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import { CanceledError } from "axios";

const useData = <T>(url: string, params?: any, dependencies: any[] = []) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get(url, { params, signal: controller.signal })
      .then((resp) => {
        setData(resp.data.results);
      })
      .catch((error: Error) => {
        if (!(error instanceof CanceledError)) {
          setError(error.message);
        }
      });
    return () => controller.abort();
  }, dependencies);
  return { data, error };
};

export default useData;
