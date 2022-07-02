import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './SearchForm.module.css';
import Notiflix from 'notiflix';
import propTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleSubmit = e => {
    e.preventDefault();

    const searchQuery = query.trim().toLocaleLowerCase();
    if (searchQuery === '') {
      Notiflix.Notify.failure('Please enter a request');
      return;
    }

    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        name="query"
        onChange={handleChange}
        className={s.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Movies"
        value={query}
      />
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </form>
  );
}
SearchForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  inputQuery: propTypes.string,
};
