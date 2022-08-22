import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@containers';

type MainProps = {};

export const Main: FC<MainProps> = () => (
  <div className='h-[2000px] border-x-2 border-x-border'>
    <div className='sticky top-0 z-10'>
      <Header />
    </div>
    <div className='px-10'>
      <Outlet />
    </div>
  </div>
);
