import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchByQuery } from '../../servises/Api';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const fetch = async () => {
    try {
      if (searchQuery) {
        const films = await fetchByQuery(query);
        setFilms(films);
      }
    } catch {
      console.error("Сan't find such a movie");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim().toLocaleLowerCase();
    if (searchQuery === '') {
      alert('Enter a query');
      return;
    }
    setSearchParams({ query: searchQuery });
    fetch(searchQuery);
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
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
