import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList, { Genre } from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList, { Game } from "./components/GameList";
import useData from "./hooks/useData";
import { useState } from "react";
import SortingSelector, { OrderBy } from "./components/SortingSelector";
import PlatformSelector, { Platform } from "./components/PlatformSelector";

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
        <GridItem pl={6} area={"aside"}>
          <GenreList
            selectedGenre={queryParam?.genre}
            onSelectGenre={(genre) => setQueryParam({ ...queryParam, genre })}
          />
        </GridItem>
        <GridItem area={"main"}>
          <HStack p={2}>
            <SortingSelector
              onSort={(orderBy) => setQueryParam({ ...queryParam, orderBy })}
              orderBy={queryParam?.orderBy}
            />
            <PlatformSelector
              platform={queryParam?.platform}
              onSelectPlatform={(platform) =>
                setQueryParam({ ...queryParam, platform })
              }
            />
          </HStack>
          <GameList data={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
