import { Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Box px={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
