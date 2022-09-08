import { FC, useEffect } from 'react';

import { MovieCard, MovieList } from '@components/movies';
import { useAppSelector, useThunkActions } from '@hooks/redux';
import { Movie } from '@types';
import { PrimarySlider } from '@components/sliders';

type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  const {
    response: { results: popular}
  } = useAppSelector((state) => state.movieSlice.popularFilm);
  const {
    response: { results: topRated }
  } = useAppSelector((state) => state.movieSlice.topRatedFilm);

  const { getMovies } = useThunkActions();
  const renderMovieItem = (item: Movie) => <MovieCard item={item} imageSize='w300' />;

  useEffect(() => {
    getMovies('popularFilm');
    getMovies('topRatedFilm');
  }, []);

  return (
    <div className='fade relative'>
      <PrimarySlider items={topRated} imageSize='w1280' />
      <h3 className='pt-5 pb-4 text-3xl font-extrabold'>Popular on TinyMoviez</h3>
      <MovieList items={popular} renderItem={renderMovieItem} />
    </div>
  );
};
