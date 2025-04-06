import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  platform?: Platform;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ platform, onSelectPlatform }: Props) => {
  const { data: platforms } = usePlatforms();
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
