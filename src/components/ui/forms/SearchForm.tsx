import { FC, ReactNode } from 'react';

type SearchFormProps = {
  children: ReactNode;
  onSubmit?: () => void;
};

export const SearchForm: FC<SearchFormProps> = ({ children, onSubmit }) => (
  <form
    className='flex items-center gap-2 rounded-2xl border-2 border-border bg-bg2 p-2'
    onSubmit={onSubmit}
  >
    {children}
  </form>
);
