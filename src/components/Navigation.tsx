import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <HStack p={4}>
      <Link to="/">
        <Logo />
      </Link>
      <SearchInput />
    </HStack>
  );
};

export default Navigation;
