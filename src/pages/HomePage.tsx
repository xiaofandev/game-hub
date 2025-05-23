import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortingSelector from "../components/SortingSelector";
import GameList from "../components/GameList";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{ lg: "1fr 6fr" }}
      >
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <PlatformSelector />
            <SortingSelector />
          </Stack>
          <GameList />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
