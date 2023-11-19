import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character } from '../utilities/types';

export const getCharacterById = createAsyncThunk(
  'get/characterById',
  async (id: string | null): Promise<Character> => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
      {
        method: 'GET',
      }
    );
    return await response.json();
  }
);

interface CharacterByIdState {
  loading: boolean;
  character: Character | undefined;
}

const initialState: CharacterByIdState = {
  loading: false,
  character: undefined,
};

export const characterByIdSlise = createSlice({
  name: 'characterById',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacterById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacterById.fulfilled, (state, action) => {
      state.character = action.payload;
      state.loading = false;
    });
  },
});

export default characterByIdSlise.reducer;
