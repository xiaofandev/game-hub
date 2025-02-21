import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrderBy: (orderBy: string) => void;
  selectedOrderBy?: string;
}

const SortSelector = ({ onSelectOrderBy, selectedOrderBy }: Props) => {
  const orderByMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSelectedOrderBy = orderByMap.find(
    (orderBy) => orderBy.value === selectedOrderBy
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSelectedOrderBy?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderByMap.map((orderBy) => (
          <MenuItem
            key={orderBy.value}
            value={orderBy.value}
            onClick={() => {
              onSelectOrderBy(orderBy.value);
            }}
          >
            {orderBy.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
