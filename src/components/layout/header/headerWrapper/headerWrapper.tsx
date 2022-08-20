import { FC, ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
};

export const HeaderWrapper: FC<WrapperProps> = ({ children }) => (
  <header className='flex justify-between p-10 items-center backdrop-blur'>{children}</header>
);
