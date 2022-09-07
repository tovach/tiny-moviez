import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '@store/movieSlice/movieSlice';

export const appStore = configureStore({
  reducer: {
    movieSlice
  }
});

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
