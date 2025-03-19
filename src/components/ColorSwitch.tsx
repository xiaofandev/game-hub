import { HStack, Switch, Text } from "@chakra-ui/react";

const ColorSwitch = () => {
  return (
    <HStack width={140}>
      <Switch size="lg" colorScheme="green"></Switch>
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitch;
