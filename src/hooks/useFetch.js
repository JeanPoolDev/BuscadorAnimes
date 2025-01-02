import { useState } from "react";

export function useFetch() {
  const [responseAnime, setResponseAnime] = useState([]);

  const animes = responseAnime.data;

  const mapperAnimes = animes?.map(anime => ({
    id: anime.mal_id,
    title: anime.title,
    image: anime.images.jpg.image_url
  }))

  const getFetchAnimes = ({ search }) => {
    if (search) {
      fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
        .then(resp => resp.json())
        .then(data => setResponseAnime(data))
    } else {
      setResponseAnime([])
    }
  }


  return {
    mapperAnimes,
    getFetchAnimes
  }
}