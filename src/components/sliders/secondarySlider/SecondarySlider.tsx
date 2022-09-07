import React, { FC, HTMLAttributes, useRef } from 'react';

import { IconButton, PrimaryButton, SecondaryButton } from '@components/ui';
import { FilmPoster } from '@types';

type SecondarySliderProps = {
  heading: string;
  items: Omit<FilmPoster, 'vote_average' | 'poster_path'>[];
};

export const SecondarySlider: FC<SecondarySliderProps> = ({ items, heading }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    ref.current!.scrollLeft += 230;
  };
  const scrollRight = () => {
    ref.current!.scrollLeft -= 230;
  };

  const onDragStart = (event: React.MouseEvent) => {
    console.log(event.clientX);
  };
  const onDragEnd = (event: React.MouseEvent) => {
    console.log(event.clientX);
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
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <article
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            key={el.id}
            className='relative h-[130px] min-w-[210px] cursor-pointer rounded-xl'
          >
            <h3 className='absolute left-2 top-2 z-20 font-extrabold'>{el.title}</h3>
            <img
              className='h-full w-full rounded-xl brightness-50'
              src={el.backdrop_path}
              alt={el.title}
              draggable='false'
            />
            <div className='absolute bottom-2 z-20 flex w-full justify-between px-2'>
              <PrimaryButton icon='add' />
              <SecondaryButton>Watch</SecondaryButton>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
