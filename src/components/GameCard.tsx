import { Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} margin={2} padding={2} mt={5}>
      <Image src={game.background_image} alt={game.name} borderRadius={5} />
      <CardBody padding={2}>
        <Text>{game.name}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
