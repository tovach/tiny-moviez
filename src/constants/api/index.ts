export const APIKEY = 'e51266e369496b6144f6cbe79f5972c1'; // yep not safe
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
export const IMAGE_SECURE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const MOVIE_ENDPOINTS = {
  popular: `${BASE_URL}movie/popular?api_key=${APIKEY}&language=en-US`,
  topRated: `${BASE_URL}movie/top_rated?api_key=${APIKEY}&language=en-US`,
  upcoming: `${BASE_URL}movie/upcoming?api_key=${APIKEY}&language=en-US`,
  nowPlaying: `${BASE_URL}movie/now_playing?api_key=${APIKEY}&language=en-US`,
} as const;

