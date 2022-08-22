import { FC, ReactNode } from 'react';

type IconButtonProps = {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
};

export const IconButton: FC<IconButtonProps> = ({ children, type }) => (
  <button type={type} className='material-icons'>
    {children}
  </button>
);
