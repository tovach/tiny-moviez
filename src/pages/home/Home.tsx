import { FC, useEffect } from 'react';

import { FilmCard, FilmsList } from '@components/films';
import { useAppSelector, useThunkActions } from '@hooks/redux';
import { Film } from '@types';
// import { PrimarySlider } from '@components/sliders';

type HomeProps = {};

export const Home: FC<HomeProps> = () => {
  const { error, loading, popular } = useAppSelector((state) => state.filmSlice);
  const { getPopularFilms } = useThunkActions();
  const renderFilmItem = (item: Film) => <FilmCard item={item} imageSize='w300' />;

  useEffect(() => {
    getPopularFilms();
  }, []);

  return (
    <div className='fade relative'>
      {/* <PrimarySlider items={images.slider} /> */}
      <h3 className='pt-5 pb-4 text-3xl font-extrabold'>Popular on TinyMoviez</h3>
      <FilmsList items={popular.results} renderItem={renderFilmItem} />
    </div>
  );
};
