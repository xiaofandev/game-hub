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
}

const GameList = ({ data }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <SimpleGrid columns={4} spacing={12} p={2} pt={0}>
        {!data && skeletons.map((id) => <GameCardLoading key={id} />)}
        {data?.map((game) => (
          <GameCard data={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
