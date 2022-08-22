import { FC } from 'react';
import { FilmPoster } from '@types';

type FilmCardProps = {
  item: Omit<FilmPoster, 'backdrop_path'>;
};

export const FilmCard: FC<FilmCardProps> = () => <div>FilmCard</div>;
