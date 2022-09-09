import { FC, useEffect, useMemo } from 'react';

import { SecondarySlider } from '@components/sliders';
import { UserBar } from '@components/user';
import { useAppSelector, useThunkActions } from '@hooks/redux';
import { Skeleton } from '@components/preloaders';

type RightProps = {};

export const Right: FC<RightProps> = () => {
  const { getMovies } = useThunkActions();

  const {
    response: { results: popular },
    requestStatus: { loading: popularLoading, error: popularError }
  } = useAppSelector((state) => state.movieSlice.popularTv);
  const {
    response: { results: topRated },
    requestStatus: { loading: topRatedLoading, error: topRatdError }
  } = useAppSelector((state) => state.movieSlice.topRatedTv);

  useEffect(() => {
    getMovies('popularTv');
    getMovies('topRatedTv');
    getMovies('nowPlayingFilm');
    getMovies('upcomingFilm');
  }, []);
  return (
    <div className='flex flex-col gap-10 pl-10 pt-10'>
      {popularLoading ? (
        <Skeleton height={130} width={210} variant='secondary' />
      ) : (
        <SecondarySlider heading='Featured TV' items={popular} imageSize='w185' />
      )}
      {topRatedLoading ? (
        <Skeleton height={130} width={210} variant='secondary' />
      ) : (
        <SecondarySlider heading='TopRated TV' items={topRated} imageSize='w185' />
      )}
    </div>
  );
};
