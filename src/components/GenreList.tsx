import useGenre from "../hooks/UseGenre";

function GenreList() {
  const { genres } = useGenre();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name} </li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
