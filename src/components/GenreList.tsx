import {
  HStack,
  List,
  ListItem,
  Image,
  Heading,
  Stack,
  Link,
} from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import useData from "../hooks/useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface Props {
  selectedGenre?: string;
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading } = useData<Genre>("/genres");
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Stack width={180}>
      <Heading>Genre</Heading>
      <List spacing={4} mt={4}>
        {isLoading &&
          skeletons.map((id) => {
            return (
              <ListItem key={id}>
                <GenreSkeleton />
              </ListItem>
            );
          })}

        {genres?.map((genre) => (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                src={genre.image_background}
                height={8}
                width={8}
                borderRadius={10}
                objectFit="cover"
              />
              <Link
                onClick={() => onSelectGenre(genre.id.toString())}
                fontWeight={
                  genre.id.toString() === selectedGenre ? "bold" : "normal"
                }
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default GenreList;
