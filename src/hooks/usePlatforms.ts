import useData from "./useData";

export interface Platform {
  id: string;
  name: string;
}

const usePlatforms = () => {
  return useData<Platform>(["platforms"], "/platforms");
};

export default usePlatforms;
