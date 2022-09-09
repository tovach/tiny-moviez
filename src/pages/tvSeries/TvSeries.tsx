import { FC, useEffect } from 'react';
import { useParams } from 'react-router';

import { MovieItem } from '@components/movies';
import { useAppSelector, useThunkActions } from '@hooks/redux';

type TvSeriesProps = {};

export const TvSeries: FC<TvSeriesProps> = () => {
  const { id } = useParams();
  const { getMovieById } = useThunkActions();
  const { item, error, loading } = useAppSelector((state) => state.movieItemSlice);

  useEffect(() => {
    if (id) {
      getMovieById({ type: 'tv', id: Number(id) });
    }
  }, [id]);

  return <div>{loading ? <h3>Loading...</h3> : <MovieItem item={item} />}</div>;
};
