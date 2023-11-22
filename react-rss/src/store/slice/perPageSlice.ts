import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface perPageState {
  value: number;
}

const initialState: perPageState = {
  value: 20,
};

export const perPageSlice = createSlice({
  name: 'perPage',
  initialState,
  reducers: {
    setPerPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPerPage } = perPageSlice.actions;

export default perPageSlice.reducer;
