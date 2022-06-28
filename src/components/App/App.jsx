import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Navigation from '../Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Movies from '../Movies/Movies';
import MoviesDetails from '../MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </>
  );
};
