import { Flex, HStack, Stack } from "@chakra-ui/react";
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
      <Navigation></Navigation>
      <Flex pl={4}>
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
        <Stack>
          <HStack pt={2}>
            <Orderby onSelectOrderBy={(orderby) => setOrderBy(orderby)} />
            <PlatformFilter
              onSelectPlatform={(platform) => setSelectedPlaform(platform)}
            />
          </HStack>
          <GameList data={games} isLoading={isLoading} />
        </Stack>
      </Flex>
    </>
  );
}

export default App;
