import {
  Card,
  CardBody,
  Text,
  Image,
  HStack,
  Flex,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { Game } from "./GameList";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineAndroid } from "react-icons/ai";

interface Props {
  data: Game;
}
const GameCard = ({ data }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdOutlinePhoneIphone,
    android: AiOutlineAndroid,
  };

  return (
    <Card width={300} borderRadius={10} overflow={"hidden"}>
      <Image
        src={data.background_image}
        objectFit="cover"
        height={220}
        width="100%"
      />
      <CardBody>
        <Flex justifyContent={"space-between"}>
          <HStack pb={2}>
            {data.parent_platforms.map(({ platform }) => (
              <Icon key={platform.id} as={iconMap[platform.slug]} />
            ))}
          </HStack>
          <Badge
            colorScheme={
              data.metacritic > 80
                ? "green"
                : data.metacritic > 60
                ? "yellow"
                : "red"
            }
          >
            {data.metacritic}
          </Badge>
        </Flex>
        <HStack>
          <Text fontWeight={680} fontSize={24}>
            {data.name}&nbsp;
            {data.metacritic > 90 ? "🎯" : data.metacritic > 80 ? "👍" : "😑"}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
