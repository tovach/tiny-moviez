import {FC, HTMLAttributes, ReactNode} from 'react';

type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
};

export const IconButton: FC<IconButtonProps> = ({ children, type, ...props }) => (
  <button type={type} className='material-icons hover:text-secondary' {...props}>
    {children}
  </button>
);
