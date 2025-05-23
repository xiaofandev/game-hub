import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshoots from "../hooks/useScreenshoots";

interface Props {
  gameId: number;
}
const GameScreenshoots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshoots(gameId);
  if (error) throw error;

  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {data.map((item) => (
        <GridItem key={item.id}>
          <img src={item.image} alt="screenshoot" />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
