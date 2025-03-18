import { Flex, HStack, Input, Switch, Text } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const Navigation = ({ onSearch }: Props) => {
  return (
    <Flex p={4} alignItems={"center"} gap={8}>
      <Text
        fontSize="24px"
        fontWeight={900}
        bgColor={"black"}
        color={"white"}
        p={2}
        borderRadius={56}
        letterSpacing={2}
        width={56}
        whiteSpace={"nowrap"}
        textAlign={"center"}
      >
        Game Hub
      </Text>
      <SearchInput onSearch={onSearch} />
      <HStack>
        <Switch size="lg" colorScheme="green"></Switch>
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </HStack>
    </Flex>
  );
};

export default Navigation;
