import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Movie, TvSeries } from '@pages';

import { Layout } from './layout';

import '@app/styles/index.css';

type AppProps = {};

export const App: FC<AppProps> = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/tv' element={<TvSeries />} />
      <Route path='/tv/:id' element={<TvSeries />} />
    </Route>
  </Routes>
);
