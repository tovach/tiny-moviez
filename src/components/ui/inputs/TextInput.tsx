import { FC } from 'react';

type TextInputProps = {
  placeholder: string;
};

export const TextInput: FC<TextInputProps> = ({ placeholder }) => (
  <input
    className='rounded-sm bg-bg2 p-2 outline-none focus:outline-secondary'
    type='text'
    placeholder={placeholder}
  />
);
