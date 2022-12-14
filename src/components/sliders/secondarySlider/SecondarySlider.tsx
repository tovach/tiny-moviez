import React, { FC, SyntheticEvent, useRef } from 'react';
import { Link } from 'react-router-dom';

import placeholder from '@app/assets/images/placeholder_s.png';
import { IconButton, PrimaryButton, SecondaryButton } from '@components/ui';
import { IMAGE_SECURE_BASE_URL } from '@constants/api';
import { Images, Movie } from '@types';

type SecondarySliderProps = {
  heading: string;
  items: Movie[];
  imageSize: Images['still_sizes'];
};

export const SecondarySlider: FC<SecondarySliderProps> = ({ items, heading, imageSize }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    ref.current!.scrollLeft += 230;
  };
  const scrollRight = () => {
    ref.current!.scrollLeft -= 230;
  };
  const onErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholder;
  };

  return (
    <div>
      <div className='mb-4 flex items-center justify-between pr-10'>
        <h3 className='text-xl font-extrabold'>{heading}</h3>
        <div className='flex gap-2'>
          <IconButton type='button' onClick={scrollRight}>
            chevron_left
          </IconButton>
          <IconButton type='button' onClick={scrollLeft}>
            chevron_right
          </IconButton>
        </div>
        <h3>See more</h3>
      </div>
      <div className='flex gap-5 overflow-hidden scroll-smooth' ref={ref}>
        {items.map((el) => (
          <article
            key={el.id}
            className='relative h-[130px] min-w-[210px] cursor-pointer rounded-xl'
          >
            <h3 className='absolute  left-2 top-2 z-20 font-extrabold'>
              {el.title ? el.title : el.name}
            </h3>
            <img
              onError={onErrorImage}
              className='h-full w-full rounded-xl brightness-50'
              src={`${IMAGE_SECURE_BASE_URL}${imageSize}${el.backdrop_path}`}
              alt={el.title ? el.title : el.name}
              draggable='false'
            />
            <div className='absolute bottom-2 z-20 flex w-full justify-between px-2'>
              <PrimaryButton icon='add' />
              <SecondaryButton>
                <Link to={`/tv/${el.id}`}>Watch</Link>
              </SecondaryButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
