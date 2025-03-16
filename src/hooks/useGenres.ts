import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;
