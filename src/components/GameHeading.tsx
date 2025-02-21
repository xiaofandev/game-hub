import { Heading } from "@chakra-ui/react";
import { QueryGame } from "../App";

interface Props {
  queryGame: QueryGame;
}

const GameHeading = ({ queryGame }: Props) => {
  const heading = `${queryGame.platform?.name || ""} ${
    queryGame.genre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
