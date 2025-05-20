import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useQueryParamStore from "../store";

const SortingSelector = () => {
  const setOrderBy = useQueryParamStore((s) => s.setOrderBy);
  const orderBy = useQueryParamStore((s) => s.queryParam.orderBy);
  const orderByList = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BiChevronDown />}>
          Order by: {orderBy?.label ? orderBy.label : "Relavance"}
        </MenuButton>
        <MenuList>
          {orderByList.map((orderBy) => {
            return (
              <MenuItem key={orderBy.value} onClick={() => setOrderBy(orderBy)}>
                {orderBy.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortingSelector;
