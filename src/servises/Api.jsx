import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'eef69e4613a866add8ae298195f2ed87';

async function fetchTrending() {
  const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
}

async function fetchByQuery(query) {
  const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
}

async function fetchById(id) {
  const url = `${BASE_URL}/movie/${id}}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}
async function fetchCredits(id) {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}language=en-US`;
  const response = await axios.get(url);
  return response.data.cast;
}
async function fetchReviews(id) {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data.results;
}

export { fetchTrending, fetchByQuery, fetchById, fetchCredits, fetchReviews };
