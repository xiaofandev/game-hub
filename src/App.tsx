import "./App.css";
import { GridItem, Grid, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="gold">
          Asid
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
