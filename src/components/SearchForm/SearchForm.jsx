import { useState } from 'react';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const searchQuery = query.trim().toLocaleLowerCase();
    if (searchQuery === '') {
      alert('Enter a query');
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
  );
}
