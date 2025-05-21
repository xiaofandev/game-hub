import { useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default GameDetails;
