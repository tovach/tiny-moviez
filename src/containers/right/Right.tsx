import { FC, useEffect, useMemo } from 'react';

import { SecondarySlider } from '@components/sliders';
import { UserBar } from '@components/user';
import { useAppSelector, useThunkActions } from '@hooks/redux';

type RightProps = {};

export const Right: FC<RightProps> = () => {
  const { getMovies } = useThunkActions();
  const {
    response: { results: popular }
  } = useAppSelector((state) => state.movieSlice.popularTv);
  const {
    response: { results: topRated }
  } = useAppSelector((state) => state.movieSlice.topRatedTv);
  const {
    response: { results: nowPlaying }
  } = useAppSelector((state) => state.movieSlice.nowPlayingFilm);
  const {
    response: { results: upcoming }
  } = useAppSelector((state) => state.movieSlice.upcomingFilm);

  useEffect(() => {
    getMovies('popularTv');
    getMovies('topRatedTv');
    getMovies('nowPlayingFilm');
    getMovies('upcomingFilm');
  }, []);
  return (
    <div className='flex flex-col gap-10 pl-10 pt-10'>
      <SecondarySlider heading='Featured TV' items={popular} imageSize='w185' />
      <SecondarySlider heading='TopRated TV' items={topRated} imageSize='w185' />
      <SecondarySlider heading='Now Playing' items={nowPlaying} imageSize='w185' />
      <SecondarySlider heading='Up Coming' items={upcoming} imageSize='w185' />
    </div>
  );
};
