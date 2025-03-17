import { Select, Text } from "@chakra-ui/react";

interface Props {
  onSelectOrderBy: (value: string) => void;
}
const Orderby = ({ onSelectOrderBy }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Orderby;
