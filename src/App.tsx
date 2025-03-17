import { Flex, Stack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList, { Game } from "./components/GameList";
import SearchBar from "./components/SearchBar";
import useData from "./hooks/useData";
import { useState } from "react";

function App() {
  const [orderBy, setOrderBy] = useState<string>("");
  const { data: games, error: gamesError } = useData<Game>(
    "/games",
    {
      ordering: orderBy,
    },
    [orderBy]
  );

  return (
    <>
      <Navigation></Navigation>
      <Flex pl={4}>
        <GenreList />
        <Stack>
          <SearchBar
            onSelectOrderBy={(orderBy) => setOrderBy(orderBy)}
            onSelectPlatform={(platform) => console.log(platform)}
          />
          <GameList data={games} />
        </Stack>
      </Flex>
    </>
  );
}

export default App;
