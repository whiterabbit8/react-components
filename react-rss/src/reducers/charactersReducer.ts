import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResultData } from '../utilities/types';

export const getCharacters = createAsyncThunk(
  'get/characters',
  async ({
    name,
    page = 1,
  }: {
    name: string;
    page: number | undefined;
  }): Promise<ResultData> => {
    const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&${searchUrl}`,
      {
        method: 'GET',
      }
    );
    return await response.json();
  }
);

interface CharactersState {
  loading: boolean;
  data: ResultData | undefined;
  error: string | undefined;
}

const initialState: CharactersState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const charactersSlise = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export default charactersSlise.reducer;
