import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardContainer from "./CardContainer";

const GameCardSkeleton = () => {
  return (
    <CardContainer>
      <Card>
        <Skeleton height={"220px"} />
        <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="4" />
      </Card>
    </CardContainer>
  );
};

export default GameCardSkeleton;
