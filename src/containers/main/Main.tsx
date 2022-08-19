import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@containers';

type MainProps = {};

export const Main: FC<MainProps> = () => (
  <div className='h-[2000px] border-x-2 border-x-border px-10'>
    <div className='sticky top-0'>
      <Header />
    </div>
    <Outlet />
  </div>
);
