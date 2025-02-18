import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image src={logo} boxSize={12}></Image>
        <Text>NavBar</Text>
      </HStack>
      <HStack padding="10px">
        <ColorModeSwitch />
        <Text>Dark mode</Text>
      </HStack>
    </HStack>
  );
};

export default NavBar;
