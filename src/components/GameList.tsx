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

interface Props {
  data: Game[] | undefined;
}

const GameList = ({ data }: Props) => {
  return (
    <>
      <SimpleGrid columns={4} spacing={12} p={2} pt={0}>
        {data?.map((game) => (
          <GameCard data={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
