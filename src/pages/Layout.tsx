import { Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
