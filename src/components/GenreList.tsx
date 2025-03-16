import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  return (
    <>
      <div>{error && <p>{error}</p>}</div>
      <ul>
        {genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
