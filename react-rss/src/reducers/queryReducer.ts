import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QueryState {
  value: string;
}

const initialState: QueryState = {
  value: localStorage.getItem('query') || '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setQuery } = querySlice.actions;

export default querySlice.reducer;
