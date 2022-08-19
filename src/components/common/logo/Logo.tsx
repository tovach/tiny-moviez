import { FC } from 'react';
import { Link } from 'react-router-dom';

type LogoProps = {};

export const Logo: FC<LogoProps> = () => (
  <h3 className='group'>
    <Link to='/' className='flex flex-col items-start'>
      <span className='text-4xl font-extrabold uppercase group-hover:text-secondary'>Tiny</span>
      <span className='text-xl font-extrabold uppercase group-hover:text-secondary'>Moviez</span>
    </Link>
  </h3>
);
