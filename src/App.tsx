import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import "./App.css";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import PlatformSelector from "./components/PlatformSelector";
import SortingSelector from "./components/SortingSelector";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ lg: "1fr 6fr" }}
      >
        <GridItem area={"nav"}>
          <Navigation />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Stack p={2} direction={{ base: "column", lg: "row" }}>
            <PlatformSelector />
            <SortingSelector />
          </Stack>
          <GameList />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
