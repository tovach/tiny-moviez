import { FC, useEffect, useMemo } from 'react';

import { SecondarySlider } from '@components/sliders';
import { UserBar } from '@components/user';
import { useAppSelector, useThunkActions } from '@hooks/redux';

type RightProps = {};

export const Right: FC<RightProps> = () => {
  const { getMovies } = useThunkActions();
  const {
    nowPlaying: {
      response: { results: nowPlaying }
    }
  } = useAppSelector((state) => state.movieSlice);

  const {
    upcoming: {
      response: { results: upComing }
    }
  } = useAppSelector((state) => state.movieSlice);

  useEffect(() => {
    getMovies('nowPlaying');
    getMovies('upcoming');
  }, []);
  return (
    <div className='flex flex-col gap-20 pl-10 pt-10'>
      <SecondarySlider heading='Now Playing' items={nowPlaying} imageSize='w185' />
      <SecondarySlider heading='UpComing' items={upComing} imageSize='w185' />
    </div>
  );
};
