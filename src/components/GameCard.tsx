import {
  Card,
  CardBody,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height="200px"
      />
      <CardBody padding={2}>
        <Text fontSize="2xl">{game.name}</Text>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
