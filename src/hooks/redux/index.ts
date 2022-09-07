import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppRootState } from '@store';
import { getPopularFilms } from '@store/filmSlice/filmSlice';
import { bindActionCreators } from 'redux';

const thunkActions = {
  getPopularFilms
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useThunkActions = () => bindActionCreators(thunkActions, useAppDispatch());
