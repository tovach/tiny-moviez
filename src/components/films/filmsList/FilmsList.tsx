import { FC } from 'react';
import { FilmPoster } from '@types';
import { FilmCard } from '@components/films';

type FilmsListProps = {
  items: Omit<FilmPoster, 'backdrop_path'>[];
};

export const FilmsList: FC<FilmsListProps> = ({ items }) => (
  <ul className='flex justify-between flex-wrap gap-10'>
    {items.map((el) => (
      <li key={el.id}>
        <FilmCard item={el} />
      </li>
    ))}
  </ul>
);
