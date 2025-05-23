import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshoots from "../components/GameScreenshoots";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;
  return (
    <SimpleGrid
      templateAreas={{
        base: '"info" "video" "pic"',
        lg: '"info video" "pic pic"',
      }}
    >
      <GridItem area="info">
        <Heading my={4}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem area="video">
        <GameTrailers gameId={game.id} />
      </GridItem>
      <GridItem area="pic">
        <GameScreenshoots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetails;
