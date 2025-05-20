import { create } from "zustand";

interface OrderBy {
  value: string;
  label: string;
}

interface Platform {
  id: string;
  name: string;
}

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface QueryParam {
  orderBy?: OrderBy;
  platform?: Platform;
  genre?: Genre;
  searchText?: string;
}

interface QueryParamStore {
  queryParam: QueryParam;
  setOrderBy: (orderBy: OrderBy) => void;
  setPlatform: (platform: Platform) => void;
  setGenre: (genre: Genre) => void;
  setSearchText: (searchText: string) => void;
}

const useQueryParamStore = create<QueryParamStore>((set) => ({
  queryParam: {},
  setOrderBy: (orderBy) =>
    set((state) => ({ queryParam: { ...state.queryParam, orderBy } })),
  setPlatform: (platform) =>
    set((state) => ({ queryParam: { ...state.queryParam, platform } })),
  setGenre: (genre) =>
    set((state) => ({ queryParam: { ...state.queryParam, genre } })),
  setSearchText: (searchText) => set({ queryParam: { searchText } }),
}));

export default useQueryParamStore;
