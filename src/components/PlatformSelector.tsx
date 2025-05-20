import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms from "../hooks/usePlatforms";
import useQueryParamStore from "../store";

const PlatformSelector = () => {
  const setPlatform = useQueryParamStore((s) => s.setPlatform);
  const selectedPlatform = useQueryParamStore((s) => s.queryParam.platform);
  const { data: platforms } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "All Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem
          key={0}
          onClick={() => setPlatform({ id: "", name: "All Platforms" })}
        >
          All Platforms
        </MenuItem>
        {platforms?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => setPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
