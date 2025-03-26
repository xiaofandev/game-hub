import { Card, CardBody, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Game } from "./GameList";
import PlatformIcons from "./PlatformIcons";
import RatingBadge from "./RatingBadge";
import Emoji from "./Emoji";

interface Props {
  data: Game;
}
const GameCard = ({ data }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image
        src={data.background_image}
        objectFit="cover"
        height={220}
        width="100%"
      />
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"center"} pb={1}>
          <PlatformIcons platforms={data.parent_platforms} />
          <RatingBadge metacritic={data.metacritic} />
        </Flex>
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
