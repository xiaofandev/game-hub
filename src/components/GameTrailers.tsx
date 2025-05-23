import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailers = ({ gameId }: Props) => {
  const { data, error } = useTrailers(gameId);
  if (error) throw error;

  if (!data) return null;

  const first = data[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      width="100%"
      height="100%"
      controls
    />
  ) : null;
};

export default GameTrailers;
