import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./GameCardContainer";
import useGames, { QueryParam } from "../hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  queryParam: QueryParam;
}

const GameList = ({ queryParam }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(queryParam);
  const fetchedDataLength =
    data?.pages?.reduce((acc, page) => acc + page.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedDataLength}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {isLoading &&
          skeletons.map((id) => (
            <CardContainer key={id}>
              <GameCardSkeleton key={id} />
            </CardContainer>
          ))}
        {!isLoading &&
          data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((game) => (
                <CardContainer key={game.id}>
                  <GameCard data={game} key={game.id} />
                </CardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameList;
