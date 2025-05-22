import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import { Spinner, Text } from "@chakra-ui/react";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error) return <Text>{error.message}</Text>;
  return <Text>{game.description_raw}</Text>;
};

export default GameDetails;
