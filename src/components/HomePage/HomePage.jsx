import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../../servises/Api';
import s from './HomePage.module.css';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await fetchTrending();
        setFilms(response);
      } catch {
        console.error();
      }
    }
    fetch();
  }, [films]);

  return (
    <>
      <ul className={s.listHome}>
        {films.map(film => (
          <li key={film.id} className={s.itemHome}>
            <Link to={`movies/${film.id}`} className={s.linkHome}>
              <img
                className={s.imgHome}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.name}
                width="150px"
                onError={e => {
                  e.target.src =
                    'https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg';
                }}
              />
              <p className={s.titleHome}>{film.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
