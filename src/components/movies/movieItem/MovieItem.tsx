import { FC, SyntheticEvent } from 'react';

import placeholder from '@app/assets/images/placeholder_l.png';
import { IMAGE_SECURE_BASE_URL } from '@constants/api';
import { Movie } from '@types';

type MovieItemProps = {
  item: Movie;
};

export const MovieItem: FC<MovieItemProps> = ({ item }) => {
  const onErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = placeholder;
  };
  return (
    <article className='mt-20'>
      <div className='flex gap-20'>
        <img
          className='self-start rounded-2xl'
          onError={onErrorImage}
          src={`${IMAGE_SECURE_BASE_URL}/w300/${item.poster_path}`}
          alt=''
        />
        <div className='flex flex-col gap-5'>
          <h3 className='text-5xl'>{item.title || item.name}</h3>
          <p className='font-bold'>
            <span>Tagline: </span> <span>{item.tagline}</span>
          </p>
          <p>
            <span>Runtime: </span> <span>{item.runtime} min</span>
          </p>
          <p>
            <span>Release date: </span> <span>{item.release_date}</span>
          </p>
          <p>
            <span>Budget: </span> <span>{item.budget} $</span>
          </p>
          <p>
            <span>Revenue: </span> <span>{item.revenue} $</span>
          </p>
          <div className='flex gap-2'>
            <span>Genres: </span>{' '}
            <ul className='flex gap-2'>
              {item.genres?.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
          <p>
            <span>Overview: </span> <span>{item.overview}</span>
          </p>
          <p>
            <span>Rating: </span> <span>{item.vote_average}</span>
          </p>
        </div>
      </div>
    </article>
  );
};
