import { HStack } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <HStack>
        <GenreList></GenreList>
      </HStack>
    </>
  );
}

export default App;
