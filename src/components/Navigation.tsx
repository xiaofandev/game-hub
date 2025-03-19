import { Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ColorSwitch from "./ColorSwitch";
import Logo from "./Logo";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navigation = ({ onSearch }: Props) => {
  return (
    <Flex p={4} justifyContent={"space-between"}>
      <Logo />
      <SearchInput onSearch={onSearch} />
      <ColorSwitch />
    </Flex>
  );
};

export default Navigation;
