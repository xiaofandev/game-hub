import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack width={140}>
      <Switch
        size="lg"
        colorScheme="green"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
      />
      <Text whiteSpace={"nowrap"}>
        {colorMode === "light" ? "Light" : "Dark"} Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
