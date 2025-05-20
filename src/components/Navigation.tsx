import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <HStack p={4}>
      <Logo />
      <SearchInput />
    </HStack>
  );
};

export default Navigation;
