import { HStack, Select, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Props {
  onSelectOrderBy: (orderBy: string) => void;
  onSelectPlatform: (platform: string) => void;
}

interface Platform {
  id: string;
  name: string;
}

const SearchBar = ({ onSelectOrderBy, onSelectPlatform }: Props) => {
  return (
    <HStack p={2} pb={4}>
      <Text>Orderby:</Text>
      <Select
        placeholder="Relevance"
        onChange={(e) => {
          onSelectOrderBy(e.target.value);
        }}
        width={200}
      >
        <option value="added">Date added</option>
        <option value="name">Name</option>
        <option value="released">Release date</option>
        <option value="metacritic">Popularity</option>
        <option value="rating">Average rating</option>
      </Select>
      <Select
        placeholder="All Platforms"
        onChange={(e) => {
          onSelectPlatform(e.target.value);
        }}
        width={200}
      >
        <option value="pc">PC</option>
        <option value="playstation">Playstation</option>
        <option value="xbox">Xbox</option>
        <option value="nintendo">Nintendo</option>
        <option value="mac">Mac</option>
        <option value="linux">Linux</option>
        <option value="ios">IOS</option>
        <option value="android">Android</option>
      </Select>
    </HStack>
  );
};

export default SearchBar;
