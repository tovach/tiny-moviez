import { FC, useEffect } from 'react';
import { MovieCard, MovieList } from '@components/movies';
import { useAppSelector, useThunkActions } from '@hooks/redux';
import { Movie } from '@types';
import { PrimarySlider } from '@components/sliders';
import { Skeleton } from '@components/preloaders';

type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  const {
    response: { results: topRated },
    requestStatus: { loading: topRatedLoading, error: topRatedError }
  } = useAppSelector((state) => state.movieSlice.topRatedFilm);

  const {
    response: { results: popular },
    requestStatus: { loading: popularLoading, error: popularError }
  } = useAppSelector((state) => state.movieSlice.popularFilm);

  const { getMovies } = useThunkActions();
  const renderMovieItem = (item: Movie) => <MovieCard item={item} imageSize='w300' />;
  const listSkeleton = () => (
      <div className='flex flex-wrap justify-between gap-10'>
        {Array(3)
          .fill(1)
          .map((el, i) => (
            <Skeleton key={i} height={375} width={250} variant='primary' />
          ))}
      </div>
    );

  useEffect(() => {
    getMovies('popularFilm');
    getMovies('topRatedFilm');
  }, []);

  return (
    <div className='fade relative'>
      {topRatedLoading ? (
        <Skeleton height={480} width={852} variant='primary' />
      ) : (
        <PrimarySlider items={topRated} imageSize='w1280' />
      )}
      <h3 className='pt-5 pb-4 text-3xl font-extrabold'>Popular on TinyMoviez</h3>
      {popularLoading ? listSkeleton() : <MovieList items={popular} renderItem={renderMovieItem} />}
    </div>
  );
};
