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
          className='py-2 text-2xl border-b-2 border-[transparent] hover:border-b-2 hover:border-secondary hover:text-secondary transition-all'
          to={el.path}
        >
          {el.title}
        </Link>
      </li>
    ))}
  </ul>
);
