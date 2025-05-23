import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}
    >
      {children}
    </Box>
  );
};

export default CardContainer;
