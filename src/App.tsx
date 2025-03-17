import { Flex, Stack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList from "./components/GameList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Flex pl={4}>
        <GenreList />
        <Stack>
          <SearchBar
            onSelectOrderBy={(orderBy) => console.log(orderBy)}
            onSelectPlatform={(platform) => console.log(platform)}
          />
          <GameList />
        </Stack>
      </Flex>
    </>
  );
}

export default App;
