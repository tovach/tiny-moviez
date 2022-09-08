import { FC, SyntheticEvent } from 'react';

import { PrimaryButton, SecondaryButton } from '@components/ui';
import { Movie, Images } from '@types';
import { IMAGE_SECURE_BASE_URL } from '@constants/api';
import placeholder from '@app/assets/images/placeholder_m.png';

type MovieCardProps = {
  item: Movie;
  imageSize: Images['poster_sizes'];
};

export const MovieCard: FC<MovieCardProps> = ({ item, imageSize }) => {
  const onErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholder;
  };
  return (
    <article className='relative max-w-[250px] cursor-pointer rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-secondary'>
      <h3 className='absolute top-4 left-2 z-20 text-2xl font-extrabold'>
        {item.title ? item.title : item.name}
      </h3>
      <img
        className='rounded-xl brightness-50'
        src={`${IMAGE_SECURE_BASE_URL}${imageSize}${item.poster_path}`}
        alt={item.title ? item.title : item.name}
        draggable='false'
        onError={onErrorImage}
      />
      <span className='text-l absolute top-4 right-2 z-20 rounded  bg-bg2 px-3 font-extrabold'>
        {item.vote_average}
      </span>
      <div className='absolute bottom-2 left-2 right-2 flex justify-between'>
        <PrimaryButton icon='add' />
        <SecondaryButton>Watch</SecondaryButton>
      </div>
    </article>
  );
};
