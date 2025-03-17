import { Select } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Props {
  onSelectPlatform: (platform: string) => void;
}

interface Platform {
  id: string;
  name: string;
}
const PlatformFilter = ({ onSelectPlatform }: Props) => {
  const { data: platforms } = useData<Platform>("/platforms/lists/parents");
  return (
    <Select
      placeholder="All Platforms"
      onChange={(e) => {
        onSelectPlatform(e.target.value);
      }}
      width={200}
    >
      {platforms?.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </Select>
  );
};

export default PlatformFilter;
