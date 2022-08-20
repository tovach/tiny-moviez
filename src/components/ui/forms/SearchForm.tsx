import {FC, ReactNode} from 'react';

type SearchFormProps = {
    children: ReactNode;
    onSubmit?: () => void;
}

export const SearchForm: FC<SearchFormProps> = ({children, onSubmit}) => (
    <form className='flex items-center gap-2 p-2 border-2 border-border rounded-2xl bg-bg2' onSubmit={onSubmit}>
        {children}
    </form>
);
