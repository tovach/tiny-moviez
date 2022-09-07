import { FC } from 'react';
import { Link } from 'react-router-dom';

import { NavigationLink } from '@types';

type CategoriesProps = {
  items: Omit<NavigationLink, 'icon'>[];
};

export const Categories: FC<CategoriesProps> = ({ items }) => (
  <ul className='flex gap-10'>
    {items.map((el) => (
      <li key={el.id}>
        <Link
          className='border-b-2 border-[transparent] py-2 text-2xl transition-all hover:border-b-2 hover:border-secondary hover:text-secondary'
          to={el.path}
        >
          {el.title}
        </Link>
      </li>
    ))}
  </ul>
);
