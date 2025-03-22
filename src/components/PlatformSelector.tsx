import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { BiChevronDown } from "react-icons/bi";

export interface Platform {
  id: string;
  name: string;
}

interface Props {
  platform?: Platform;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ platform, onSelectPlatform }: Props) => {
  const { data: platforms } = useData<Platform>("/platforms/lists/parents");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {platform ? platform.name : "All Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem
          key={0}
          onClick={() => onSelectPlatform({ id: "", name: "All Platforms" })}
        >
          All Platforms
        </MenuItem>
        {platforms?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
