import { configureStore } from '@reduxjs/toolkit';
import filmSlice from '@store/filmSlice/filmSlice';


export const appStore = configureStore({
  reducer: {
    filmSlice
  }
});

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
