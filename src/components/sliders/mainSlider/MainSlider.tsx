import { FC, useEffect, useState } from 'react';

import { PrimaryButton, SecondaryButton } from '@components/ui';
import { FilmPoster } from '@types';

type SliderProps = {
  items: Omit<FilmPoster, 'vote_average' | 'poster_path'>[];
};

export const MainSlider: FC<SliderProps> = ({ items }) => {
  const [active, setActive] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const imagesCount = items.length;

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % imagesCount);
  };
  const prevSlide = () => {
    setActive((prev) => (prev + imagesCount - 1) % imagesCount);
  };

  const sliderInit = () => {
    clearInterval(intervalId);
    const id = setInterval(() => {
      nextSlide();
    }, 5000);
    setIntervalId(id);
  };

  const stopSlider = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    sliderInit();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='relative'>
      <div className='relative flex select-none justify-center'>
        {items.map((el, index) => (
          <div key={el.id} className={`${active === index ? 'fade-anim' : 'hidden'} w-full`}>
            <h3 className='absolute top-4 left-4 z-20 text-4xl font-extrabold'>{el.title}</h3>
            <img
              className='z-10 rounded-2xl brightness-50'
              onMouseEnter={stopSlider}
              onMouseLeave={sliderInit}
              src={el.backdrop_path}
              alt=''
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
