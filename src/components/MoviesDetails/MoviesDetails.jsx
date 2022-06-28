import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchById } from 'servises/Api';
import s from './MoviesDetails.module.css';

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchById(movieId);
        setFilm(response);
      } catch {
        console.log('errror');
      }
    }
    fetch();
  }, [movieId]);
  return (
    film && (
      <>
        <button className={s.back} onClick={handleClick}>
          Go back
        </button>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt=""
              width="150px"
              onError={e => {
                e.target.src =
                  'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg';
              }}
            />
          </div>
          <div>
            <h1>
              {film.title} ({film.release_date.slice(0, 4)})
            </h1>
            <p>User Score: {film.vote_average * 10}%</p>
            <h2>Overview </h2>
            <p>{film.overview}</p>
            <h2>Genres</h2>
            <p>
              {film.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </p>
          </div>
        </div>
      </>
    )
  );
}
