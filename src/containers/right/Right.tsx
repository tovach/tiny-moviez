import { FC, useMemo } from 'react';

import { SecondarySlider } from '@components/sliders';
import { UserBar } from '@components/user';

type RightProps = {};

export const Right: FC<RightProps> = () => {
  const images = {
    slider: useMemo(
      () => [
        {
          id: 12511112,
          backdrop_path:
            'https://i.picsum.photos/id/909/850/350.jpg?hmac=RalYKAiI2wU-udpvM7jLFNjjxxZt2pjPYTvZwFnPNKQ',
          title: 'The Crown'
        },
        {
          id: 512222,
          backdrop_path:
            'https://i.picsum.photos/id/408/850/350.jpg?hmac=bTKeWBeP4HmJAZuJIN6qvB1vr0ZRgeexcRqzmFg55GM',
          title: 'Marvel'
        },
        {
          id: 524444512,
          backdrop_path:
            'https://i.picsum.photos/id/671/850/350.jpg?hmac=QuIyjiGrrxRm3RThzxa4tbElIl6QoGaqi5Kd9GqRnsI',
          title: 'Spider'
        },
        {
          id: 125211112,
          backdrop_path:
            'https://i.picsum.photos/id/909/850/350.jpg?hmac=RalYKAiI2wU-udpvM7jLFNjjxxZt2pjPYTvZwFnPNKQ',
          title: 'The Crown'
        },
        {
          id: 5125222,
          backdrop_path:
            'https://i.picsum.photos/id/408/850/350.jpg?hmac=bTKeWBeP4HmJAZuJIN6qvB1vr0ZRgeexcRqzmFg55GM',
          title: 'Marvel'
        },
        {
          id: 521444512,
          backdrop_path:
            'https://i.picsum.photos/id/671/850/350.jpg?hmac=QuIyjiGrrxRm3RThzxa4tbElIl6QoGaqi5Kd9GqRnsI',
          title: 'Spider'
        }
      ],
      []
    )
  };
  return (
    <div className='flex flex-col gap-10 pl-10 pt-10'>
      <UserBar />
      <SecondarySlider heading='Top Rated' items={images.slider} />
      <SecondarySlider heading='Newest' items={images.slider} />
      <SecondarySlider heading='Newest' items={images.slider} />
      <SecondarySlider heading='Featured' items={images.slider} />
    </div>
  );
};
