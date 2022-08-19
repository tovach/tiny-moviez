import { FC } from 'react';
import { Link } from 'react-router-dom';

import { NavigationLink } from '@types';

type NavigationProps = {
  heading: string;
  items: NavigationLink[];
};

export const Navigation: FC<NavigationProps> = ({ heading, items }) => (
  <nav>
    <h3 className='mb-5 text-headings'>{heading}</h3>
    <ul className='flex flex-col gap-4'>
      {items.map((el) => (
        <li key={el.id} className='hover:border-r-2 hover:border-secondary hover:text-secondary'>
          <Link to={el.path} className='flex items-center gap-4 text-xl font-bold'>
            <span className='material-icons'>{el.icon}</span>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
