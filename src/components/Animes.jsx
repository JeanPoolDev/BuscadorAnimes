
const ResponseAnimes = ({ animes }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-4">
      {animes.slice(0, 4).map(anime => (
        <li key={anime.id}>
          <img
            className="w-[250px] h-[300px] "
            src={anime.image}
            alt={anime.title} />
          <p>{anime.title}</p>
        </li>
      ))}
    </ul>
  )
}

const NoResponseAnimes = () => {
  return (
    <div className="grid place-content-center">
      <p>No hay animes</p>
    </div>
  )
}

export function Animes({ animes }) {
  const hasAnimes = animes?.length > 1;

  return (
    hasAnimes
      ? <ResponseAnimes animes={animes} />
      : <NoResponseAnimes />
  )
}