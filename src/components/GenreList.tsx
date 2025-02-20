import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} mb={5}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="30px"
              borderRadius={8}
            />
            <Button
              onClick={() => {
                onSelectGenre(genre.id + "");
              }}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
