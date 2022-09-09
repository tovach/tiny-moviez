import { configureStore } from '@reduxjs/toolkit';
import movieItemSlice from '@store/movieItemSlice/movieItemSlice';
import movieSlice from '@store/movieSlice/movieSlice';

export const appStore = configureStore({
  reducer: {
    movieSlice,
    movieItemSlice
  }
});

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
