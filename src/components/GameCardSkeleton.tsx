import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Box width={300} borderRadius={10} overflow={"hidden"}>
      <Skeleton height={220} />
      <SkeletonText mt="4" noOfLines={4} spacing="2" skeletonHeight="4" />
    </Box>
  );
};

export default GameCardSkeleton;
