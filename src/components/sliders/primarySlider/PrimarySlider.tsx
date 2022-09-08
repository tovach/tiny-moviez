import React, { FC, SyntheticEvent, useState } from 'react';

import { PrimaryButton, SecondaryButton } from '@components/ui';
import { Images, Movie } from '@types';
import { IMAGE_SECURE_BASE_URL } from '@constants/api';
import placeholder from '@app/assets/images/placeholder_l.png';

type SliderProps = {
  items: Movie[];
  imageSize: Images['backdrop_sizes'];
};

export const PrimarySlider: FC<SliderProps> = ({ items, imageSize }) => {
  const [active, setActive] = useState(0);
  const imagesCount = items.length;

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % imagesCount);
  };
  const prevSlide = () => {
    setActive((prev) => (prev + imagesCount - 1) % imagesCount);
  };

  const onErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholder;
  };
  return (
    <div className='relative'>
      <div className='relative flex justify-center'>
        {items.map((el, index) => (
          <div
            key={el.id}
            className={`${active === index ? 'fade-anim' : 'hidden'} w-full duration-300`}
          >
            <h3 className='absolute top-4 left-4 z-20 text-4xl font-extrabold '>{el.title}</h3>
            <img
              onError={onErrorImage}
              className='z-10 rounded-2xl brightness-50'
              src={`${IMAGE_SECURE_BASE_URL}${imageSize}${el.backdrop_path}`}
              alt={el.title}
              draggable='false'
            />
            <div className='pointer-events-none absolute bottom-4 flex w-full justify-between px-4'>
              <PrimaryButton className='pointer-events-auto' icon='add'>
                Watch List
              </PrimaryButton>
              <SecondaryButton className='pointer-events-auto'>Watch Now</SecondaryButton>
            </div>
          </div>
        ))}
      </div>
      <div className='pointer-events-none absolute top-1/2 flex w-full -translate-y-1/2 transform justify-between px-4'>
        <PrimaryButton icon='chevron_left' className='pointer-events-auto' onClick={prevSlide} />
        <PrimaryButton icon='chevron_right' className='pointer-events-auto' onClick={nextSlide} />
      </div>
      <div>{Array(imagesCount)}</div>
    </div>
  );
};
