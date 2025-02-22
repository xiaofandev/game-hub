import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading mb={5} fontSize="xl">
        Gennres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} mb={5}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="30px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant="link"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
