import { Card, CardBody, Text, Image, HStack } from "@chakra-ui/react";
import { Game } from "./GameList";
import PlatformIcons from "./PlatformIcons";
import RatingBadge from "./RatingBadge";
import Emoji from "./Emoji";

interface Props {
  data: Game;
}
const GameCard = ({ data }: Props) => {
  return (
    <Card>
      <Image src={data.background_image} objectFit="cover" height={"200px"} />
      <CardBody>
        <HStack justifyContent={"space-between"} pb={1}>
          <PlatformIcons platforms={data.parent_platforms} />
          <RatingBadge metacritic={data.metacritic} />
        </HStack>
        <HStack>
          <Text fontWeight={680} fontSize={24}>
            {data.name}&nbsp;
            <Emoji metacritic={data.metacritic} />
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
