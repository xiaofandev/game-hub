import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import GenreList, { Genre } from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList, { Game } from "./components/GameList";
import useData from "./hooks/useData";
import { useState } from "react";
import SortingSelector, { OrderBy } from "./components/SortingSelector";
import PlatformSelector, { Platform } from "./components/PlatformSelector";
import "./App.css";

interface QueryParam {
  orderBy?: OrderBy;
  platform?: Platform;
  genre?: Genre;
  search?: string;
}

function App() {
  const [queryParam, setQueryParam] = useState<QueryParam>();
  const { data: games, isLoading } = useData<Game>(
    "/games",
    {
      ordering: queryParam?.orderBy?.value,
      parent_platforms: queryParam?.platform?.id,
      genres: queryParam?.genre?.id,
      search: queryParam?.search,
    },
    [queryParam]
  );

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
          <GameList data={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
