import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return useData<Platform>("/platforms");
};

export default usePlatforms;
