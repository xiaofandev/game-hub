import "./App.css";
import { GridItem, Grid, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSeletor from "./components/PlatformSeletor";
import { Platform } from "./hooks/usePlatforms";

export interface QueryGame {
  genre?: Genre;
  platform?: Platform;
}

function App() {
  const [queryGame, setQueryGame] = useState({} as QueryGame);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"} padding={5}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="20px">
          <GenreList
            onSelectGenre={(genre) => {
              setQueryGame({ ...queryGame, genre });
            }}
            selectedGenre={queryGame.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSeletor
          onPlatformChange={(platform) => {
            setQueryGame({ ...queryGame, platform });
          }}
          selectedPlatform={queryGame.platform}
        />
        <GameGrid queryGame={queryGame} />
      </GridItem>
    </Grid>
  );
}

export default App;
