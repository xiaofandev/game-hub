import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList from "./components/GameList";
import { useState } from "react";
import SortingSelector from "./components/SortingSelector";
import PlatformSelector from "./components/PlatformSelector";
import "./App.css";
import useGames, { QueryParam } from "./hooks/useGames";

function App() {
  const [queryParam, setQueryParam] = useState<QueryParam>({});
  const { data: games, error, isLoading } = useGames(queryParam);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navigation
            onSearch={(search) => setQueryParam({ ...queryParam, search })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList
              selectedGenre={queryParam?.genre}
              onSelectGenre={(genre) => setQueryParam({ ...queryParam, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Stack p={2} direction={{ base: "column", lg: "row" }}>
            <PlatformSelector
              platform={queryParam?.platform}
              onSelectPlatform={(platform) =>
                setQueryParam({ ...queryParam, platform })
              }
            />
            <SortingSelector
              onSort={(orderBy) => setQueryParam({ ...queryParam, orderBy })}
              orderBy={queryParam?.orderBy}
            />
          </Stack>
          <GameList error={error} data={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
