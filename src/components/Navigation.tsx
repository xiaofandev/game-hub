import { Flex, HStack, Input, Switch, Text } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex p={4} alignItems={"center"} gap={8}>
      <Text
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
      <Input placeholder="Search games..." borderRadius={18}></Input>
      <HStack>
        <Switch size="lg" colorScheme="green"></Switch>
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </HStack>
    </Flex>
  );
};

export default Navigation;
