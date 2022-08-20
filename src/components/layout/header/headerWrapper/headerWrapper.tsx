import { FC, ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
};

export const HeaderWrapper: FC<WrapperProps> = ({ children }) => (
  <header className='flex justify-between py-10'>{children}</header>
);
