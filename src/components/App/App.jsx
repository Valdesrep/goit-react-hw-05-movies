import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Navigation from '../Navigation/Navigation';

const HomePage = lazy(() => import('../HomePage/HomePage'));
const Movies = lazy(() => import('../Movies/Movies'));
const MoviesDetails = lazy(() => import('../MoviesDetails/MoviesDetails'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div> Loading...</div>}>
        <div className={s.container}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="movies/:movieId/*" element={<MoviesDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
};
