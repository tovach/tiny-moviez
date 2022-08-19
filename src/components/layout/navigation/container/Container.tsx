import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className='flex flex-col gap-20 pl-8 pt-8'>{children}</div>
);
