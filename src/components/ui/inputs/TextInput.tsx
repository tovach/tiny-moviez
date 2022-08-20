import {FC} from 'react';

type TextInputProps = {
    placeholder: string;
}

export const TextInput: FC<TextInputProps> = ({placeholder}) => (
    <input className='bg-bg2 p-2' type='text' placeholder={placeholder}/>
);
