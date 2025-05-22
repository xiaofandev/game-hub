import { Heading } from "@chakra-ui/react";

interface Props {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <>
      <Heading as="dt" color="gray.600" fontSize={18}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </>
  );
};

export default DefinitionItem;
