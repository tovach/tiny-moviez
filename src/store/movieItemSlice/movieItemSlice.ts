import { APIKEY } from '@constants/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Movie } from '@types';

type MovieItemSliceState = {
  loading: boolean;
  error: string | undefined;
  item: Movie;
};

const initialState: MovieItemSliceState = {
  loading: false,
  error: undefined,
  item: {} as Movie
};

export const getMovieById = createAsyncThunk<
  Movie,
  { type: 'tv' | 'movie'; id: number },
  { rejectValue: string }
>('movieItemSlice/getMovieById', async (arg, thunkAPI) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${arg.type}/${arg.id}?api_key=${APIKEY}&language=en-US`
  );

  if (!response.ok) {
    return thunkAPI.rejectWithValue(`Error, status code ${response.status}`);
  }
  const data = (await response.json()) as Movie;
  return data;
});

const movieItemSlice = createSlice({
  name: 'movieItemSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default movieItemSlice.reducer;
