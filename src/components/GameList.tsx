import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardSkeleton";

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
  isLoading: boolean;
}

const GameList = ({ data, isLoading }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <SimpleGrid columns={4} spacing={12} p={2} pt={2}>
        {isLoading && skeletons.map((id) => <GameCardLoading key={id} />)}
        {!isLoading &&
          data?.map((game) => <GameCard data={game} key={game.id} />)}
      </SimpleGrid>
    </>
  );
};

export default GameList;
