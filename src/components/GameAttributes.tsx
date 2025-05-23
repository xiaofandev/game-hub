import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import RatingBadge from "./RatingBadge";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid my={8} columns={{ base: 1, md: 2 }} spacing={8}>
      <GridItem>
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.slug}>{platform.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Metascore">
          <RatingBadge metacritic={game.metacritic} />
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
      <GridItem>
        <DefinitionItem term="Publishers">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
