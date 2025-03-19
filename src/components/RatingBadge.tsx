import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const RatingBadge = ({ metacritic }: Props) => {
  return (
    <Badge
      colorScheme={
        metacritic > 80 ? "green" : metacritic > 60 ? "yellow" : "red"
      }
    >
      {metacritic}
    </Badge>
  );
};

export default RatingBadge;
