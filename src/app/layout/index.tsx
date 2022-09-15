import { FC } from 'react';

import { Left, Main, Right } from '@containers';

export const Layout: FC = () => (
  <div className='bg-bg1 text-primary'>
    <div className='container relative m-auto grid min-h-screen grid-cols-[250px_minmax(320px,_1fr)_350px]'>
      <div className='bg-bg2'>
        <div className='sticky top-0'>
          <Left />
        </div>
      </div>
      <Main />
      <div className='bg-bg2'>
        <div className='sticky top-0 flex h-screen flex-col justify-center overflow-hidden'>
          <Right />
        </div>
      </div>
    </div>
  </div>
);
