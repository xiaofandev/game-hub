import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      fontSize="24px"
      fontWeight={900}
      bgColor={"black"}
      color={"white"}
      p={2}
      borderRadius={56}
      letterSpacing={2}
      whiteSpace={"nowrap"}
      textAlign={"center"}
    >
      Game Hub
    </Text>
  );
};

export default Logo;
