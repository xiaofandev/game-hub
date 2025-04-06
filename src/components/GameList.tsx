import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

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
  error: string | undefined;
  isLoading: boolean;
}

const GameList = ({ data, error, isLoading }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box p={2}>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} p={2} spacing={4}>
        {isLoading && skeletons.map((id) => <GameCardSkeleton key={id} />)}
        {!isLoading &&
          data?.map((game) => <GameCard data={game} key={game.id} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameList;
