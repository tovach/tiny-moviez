import { FC } from 'react';

import { Film } from '@types';

type FilmsListProps = {
  items: Film[];
  renderItem: (item: Film) => React.ReactNode;
};

export const FilmsList: FC<FilmsListProps> = ({ items, renderItem }) => (
  <ul className='flex flex-wrap justify-between gap-10'>
    {items.map((el) => (
      <li key={el.id}>{renderItem(el)}</li>
    ))}
  </ul>
);
