import { Card, CardBody, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} margin={2} mt={5}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody padding={2}>
        <Text fontSize="2xl">{game.name}</Text>
        <PlatformIcons
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
