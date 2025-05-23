import { Card, CardBody, Text, Image, HStack } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import RatingBadge from "./RatingBadge";
import Emoji from "./Emoji";
import { NavLink } from "react-router";
import Game from "../entities/Game";

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
          <NavLink to={`/games/${data.slug}`}>
            <Text fontWeight={680} fontSize={24}>
              {data.name}&nbsp;
              <Emoji metacritic={data.metacritic} />
            </Text>
          </NavLink>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
