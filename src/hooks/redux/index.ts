import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, AppRootState } from '@store';
import { getMovies } from '@store/movieSlice/movieSlice';
import { bindActionCreators } from 'redux';

const thunkActions = {
    getMovies
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
export const useThunkActions = () => bindActionCreators(thunkActions, useAppDispatch());
