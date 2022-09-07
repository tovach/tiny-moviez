import { ENDPOINTS } from '@constants/api';
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRootState } from '@store';
import { PopularFilmsResponse } from '@types';

type FilmSliceState = {
  loading: boolean;
  error: string | null;
  popular: PopularFilmsResponse;
};

const initialState: FilmSliceState = {
  loading: false,
  error: null,
  popular: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  } as PopularFilmsResponse
};

const isRejected = (action: AnyAction) => action.type.endsWith('rejected');

export const getPopularFilms = createAsyncThunk<
  PopularFilmsResponse,
  void,
  { rejectValue: string; state: AppRootState }
>('filmSlice/getPopularFilms', async (_, thunkApi) => {
  const response = await fetch(ENDPOINTS.popularMovies);
  if (!response.ok) {
    return thunkApi.rejectWithValue('Something went wrong...');
  }
  const data = (await response.json()) as PopularFilmsResponse;
  return data;
});

const filmSlice = createSlice({
  name: 'filmSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularFilms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularFilms.fulfilled, (state, action) => {
      state.loading = false;
      state.popular = action.payload;
    });
    builder.addMatcher(isRejected, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});
export default filmSlice.reducer;
