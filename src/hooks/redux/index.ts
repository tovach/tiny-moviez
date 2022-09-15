import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppDispatch, AppRootState } from '@store';
import { getMovieById } from '@store/movieItemSlice/movieItemSlice';
import { getMovies } from '@store/movieSlice/movieSlice';

const thunkActions = {
  getMovies,
  getMovieById
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useThunkActions = () => bindActionCreators(thunkActions, useAppDispatch());
