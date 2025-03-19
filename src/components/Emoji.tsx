interface Props {
  metacritic: number;
}
const Emoji = ({ metacritic }: Props) => {
  return <>{metacritic > 90 ? "🎯" : metacritic > 80 ? "👍" : "😑"}</>;
};

export default Emoji;
