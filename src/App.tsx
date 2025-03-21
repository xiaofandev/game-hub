import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList, { Game } from "./components/GameList";
import useData from "./hooks/useData";
import { useState } from "react";
import SortingSelector, { OrderBy } from "./components/SortingSelector";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [orderBy, setOrderBy] = useState<OrderBy>();
  const [selectedPlatform, setSelectedPlaform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { data: games, isLoading } = useData<Game>(
    "/games",
    {
      ordering: orderBy,
      parent_platforms: selectedPlatform,
      genres: selectedGenre,
      search: searchInput,
    },
    [orderBy, selectedPlatform, selectedGenre, searchInput]
  );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header header" "aside main"`,
        }}
      >
        <GridItem area={"header"}>
          <Navigation onSearch={(searchInput) => setSearchInput(searchInput)} />
        </GridItem>
        <GridItem pl={6} area={"asid"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area={"main"}>
          <HStack p={2}>
            <SortingSelector
              onSort={(orderby) => setOrderBy(orderby)}
              orderBy={orderBy}
            />
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlaform(platform)}
            />
          </HStack>
          <GameList data={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
