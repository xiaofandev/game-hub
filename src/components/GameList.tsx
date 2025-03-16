import { SimpleGrid } from "@chakra-ui/react";
import useData from "../hooks/useData";
import GameCard from "./GameCard";

interface Platform {
  id: number;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

const GameList = () => {
  const { data, error } = useData<Game>("/games");
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={4} spacing={12} p={2} pt={0}>
        {data?.map((game) => (
          <GameCard data={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
