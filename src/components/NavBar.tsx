import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={12}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
