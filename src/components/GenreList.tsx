import {
  HStack,
  List,
  ListItem,
  Image,
  Heading,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import useGenre from "../hooks/useGenres";
import useQueryParamStore from "../store";

const GenreList = () => {
  const selectedGenre = useQueryParamStore((state) => state.queryParam.genre);
  const setGenre = useQueryParamStore((state) => state.setGenre);

  const { data: genres, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Stack>
      <Heading>Genre</Heading>
      {error && <Text>{error.message}</Text>}
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
                onClick={() => setGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
