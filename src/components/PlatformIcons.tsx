import { HStack, Icon } from "@chakra-ui/react";
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

interface Platform {
  id: number;
  slug: string;
}

interface Props {
  platforms: [{ platform: Platform }];
}
const PlatformIcons = ({ platforms }: Props) => {
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
    <HStack pb={2}>
      {platforms.map(({ platform }) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
