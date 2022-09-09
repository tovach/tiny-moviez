import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppRootState } from '@store';
import { getMovies } from '@store/movieSlice/movieSlice';
import { bindActionCreators } from 'redux';
import { getMovieById } from '@store/movieItemSlice/movieItemSlice';

const thunkActions = {
  getMovies,
  getMovieById
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useThunkActions = () => bindActionCreators(thunkActions, useAppDispatch());
