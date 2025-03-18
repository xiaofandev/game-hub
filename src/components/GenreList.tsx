import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <Stack>
      <Heading>Genre</Heading>
      <List spacing={4}>
        {!genres &&
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
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default GenreList;
