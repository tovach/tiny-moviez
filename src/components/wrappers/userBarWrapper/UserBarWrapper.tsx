import { FC, ReactNode } from 'react';

type UserBarWrapperProps = {
  children: ReactNode;
};

export const UserBarWrapper: FC<UserBarWrapperProps> = ({ children }) => (
  <div className='flex items-center justify-between'>{children}</div>
);
