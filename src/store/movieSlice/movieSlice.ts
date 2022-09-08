import { ENDPOINTS } from '@constants/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppRootState } from '@store';
import { GetMoviesResponse } from '@types';

type QueryStrings = keyof typeof ENDPOINTS;

type RequestStatus = {
  loading: boolean;
  error: string | undefined;
};

type Movies = {
  requestStatus: RequestStatus;
  response: GetMoviesResponse;
};

type MovieSliceState = {
  popularFilm: Movies;
  topRatedFilm: Movies;
  upcomingFilm: Movies;
  nowPlayingFilm: Movies;
  popularTv: Movies;
  topRatedTv: Movies;
};

const prepareStateSignature = (): Movies => ({
  requestStatus: {
    loading: false,
    error: undefined
  },
  response: {
    page: 0,
    results: [],
    total_results: 0,
    total_pages: 0
  }
});

const initialState: MovieSliceState = {
  popularFilm: prepareStateSignature(),
  topRatedFilm: prepareStateSignature(),
  upcomingFilm: prepareStateSignature(),
  nowPlayingFilm: prepareStateSignature(),
  popularTv: prepareStateSignature(),
  topRatedTv: prepareStateSignature()
};

export const getMovies = createAsyncThunk<
  GetMoviesResponse,
  QueryStrings,
  { rejectValue: string; state: AppRootState }
>('movieSlice/getMovies', async (arg, thunkApi) => {
  const response = await fetch(ENDPOINTS[arg]);
  if (!response.ok) {
    return thunkApi.rejectWithValue(`Error, response code - ${response.status}`);
  }
  const data = (await response.json()) as GetMoviesResponse;
  return data;
});

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, action) => {
      state[action.meta.arg].requestStatus.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state[action.meta.arg].requestStatus.loading = false;
      state[action.meta.arg].response = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state[action.meta.arg].requestStatus.loading = false;
      state[action.meta.arg].requestStatus.error = action.payload;
    });
  }
});
export default movieSlice.reducer;
