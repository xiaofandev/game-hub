import { Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

interface Props {
  onSearch: (search: string) => void;
}

const Navigation = ({ onSearch }: Props) => {
  return (
    <Flex p={4} justifyContent={"space-between"}>
      <Logo />
      <SearchInput onSearch={onSearch} />
    </Flex>
  );
};

export default Navigation;
