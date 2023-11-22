import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  isResultsLoading: boolean;
  isDetailsLoading: boolean;
}

const initialState: LoadingState = {
  isResultsLoading: false,
  isDetailsLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setResultsLoading: (state, action: PayloadAction<boolean>) => {
      state.isResultsLoading = action.payload;
    },
    setDetailsLoading: (state, action: PayloadAction<boolean>) => {
      state.isDetailsLoading = action.payload;
    },
  },
});

export const { setResultsLoading, setDetailsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
