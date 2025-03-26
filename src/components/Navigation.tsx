import { HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

interface Props {
  onSearch: (search: string) => void;
}

const Navigation = ({ onSearch }: Props) => {
  return (
    <HStack p={4}>
      <Logo />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

export default Navigation;
