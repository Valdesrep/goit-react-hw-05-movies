import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { fetchByQuery } from '../../servises/Api';
import s from './Movies.module.css';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchByQuery(query).then(response => setFilms(response));
  }, [query]);

  const handleSubmitForm = query => {
    setQuery(query);
    setSearchParams({ query: query });
  };
  return (
    <div>
      <SearchForm onSubmit={handleSubmitForm}></SearchForm>
      {films && (
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
      )}
    </div>
  );
}
