import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      <List spacing={4}>
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
    </>
  );
};

export default GenreList;
