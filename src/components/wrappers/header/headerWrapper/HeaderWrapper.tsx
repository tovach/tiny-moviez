import { FC, ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
};

export const HeaderWrapper: FC<WrapperProps> = ({ children }) => (
  <header className='flex items-center justify-between bg-bg1 bg-opacity-80 p-10 backdrop-blur'>
    {children}
  </header>
);
