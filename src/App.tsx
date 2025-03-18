import { Flex, Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";
import GameList, { Game } from "./components/GameList";
import useData from "./hooks/useData";
import { useState } from "react";
import Orderby from "./components/Orderby";
import PlatformFilter from "./components/PlatformFilter";

function App() {
  const [orderBy, setOrderBy] = useState<string>("");
  const [selectedPlatform, setSelectedPlaform] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const { data: games, isLoading } = useData<Game>(
    "/games",
    {
      ordering: orderBy,
      parent_platforms: selectedPlatform,
      genres: selectedGenre,
    },
    [orderBy, selectedPlatform, selectedGenre]
  );

  return (
    <>
      <Grid
        templateAreas={`"header header"
                            "asid filter"
                            "asid main"`}
        gridTemplateColumns={"180px 1fr"}
      >
        <GridItem area={"header"}>
          <Navigation />
        </GridItem>
        <GridItem pl={6} area={"asid"}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area={"filter"}>
          <HStack p={2}>
            <Orderby onSelectOrderBy={(orderby) => setOrderBy(orderby)} />
            <PlatformFilter
              onSelectPlatform={(platform) => setSelectedPlaform(platform)}
            />
          </HStack>
        </GridItem>
        <GridItem area={"main"}>
          <GameList data={games} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
