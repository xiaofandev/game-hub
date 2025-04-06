import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"220px"} />
      <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="4" />
    </Card>
  );
};

export default GameCardSkeleton;
