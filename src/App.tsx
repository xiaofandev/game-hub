import { Flex } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList from "./components/GameList";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Flex pl={4}>
        <GenreList />
        <GameList />
      </Flex>
    </>
  );
}

export default App;
