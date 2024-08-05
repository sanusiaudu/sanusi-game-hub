import useGenre from "../hooks/UseGenre";

function GenreList() {
  const { data } = useGenre();
  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name} </li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
