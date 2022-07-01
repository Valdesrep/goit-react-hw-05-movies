import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, Link, Route, Routes, useLocation } from 'react-router-dom';
import { fetchById } from 'servises/Api';
import s from './MoviesDetails.module.css';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

export default function MoviesDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

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

  const path = location?.state?.from ?? '/';
  return (
    film && (
      <>
        <Link to={path} className={s.back}>
          {'Go Back'}
        </Link>
        <div className={s.box}>
          <div className={s.thumb}>
            <img
              className={s.poster}
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
        <ul className={s.List}>
          <li>
            <Link to="cast" className={s.Link} state={{ from: path }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={s.Link} state={{ from: path }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="reviews" element={<Reviews id={movieId} />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
