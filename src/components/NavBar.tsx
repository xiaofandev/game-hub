import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={8}></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
