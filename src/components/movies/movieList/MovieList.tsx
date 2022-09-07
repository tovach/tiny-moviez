import { FC } from 'react';

import { Movie } from '@types';

type MovieListProps = {
  items: Movie[];
  renderItem: (item: Movie) => React.ReactNode;
};

export const MovieList: FC<MovieListProps> = ({ items, renderItem }) => (
  <ul className='flex flex-wrap justify-between gap-10'>
    {items.map((el) => (
      <li key={el.id}>{renderItem(el)}</li>
    ))}
  </ul>
);
