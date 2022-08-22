import { FC } from 'react';
import { FilmPoster } from '@types';
import {PrimaryButton, SecondaryButton} from "@components/ui";

type FilmCardProps = {
  item: Omit<FilmPoster, 'backdrop_path'>;
};

export const FilmCard: FC<FilmCardProps> = ({item}) =>
    <article className='relative max-w-[250px] rounded-xl cursor-pointer transition-all hover:shadow-secondary shadow-lg hover:scale-105'>
        <h3 className='absolute top-4 left-2 z-20 font-extrabold text-2xl'>{item.title}</h3>
        <img className='brightness-50 rounded-xl' src={item.poster_path} alt={item.title}/>
        <span className='absolute top-4 right-2 z-20 font-extrabold text-l  rounded bg-bg2 px-3'>{item.vote_average}</span>
        <div className='absolute bottom-2 left-2 right-2 flex justify-between'>
            <PrimaryButton icon='add'/>
            <SecondaryButton>Watch</SecondaryButton>
        </div>
    </article>;
