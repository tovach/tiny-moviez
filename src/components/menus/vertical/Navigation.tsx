import { FC } from 'react';

import { NavigationLink } from '@types';
import {Link} from "react-router-dom";

type NavigationProps = {
  heading: string;
  items: NavigationLink[];
};

export const Navigation: FC<NavigationProps> = ({ heading, items }) => (
  <nav>
    <h3 className='mb-5 text-headings'>{heading}</h3>
      <ul className='flex flex-col gap-4'>
          {items.map(el=>
          <li key={el.id} className='hover:border-secondary hover:border-r-2 hover:text-secondary'>
              <Link to={el.path} className='flex gap-4 items-center font-bold text-xl'>
                  <span className='material-icons'>{el.icon}</span>
                  {el.title}
              </Link>
          </li>)}
      </ul>
  </nav>
);
