import { configureStore } from '@reduxjs/toolkit';
import querySlice from './slice/querySlice';
import { apiSlice } from './apiSlice/apiSlice';
import loadingSlice from './slice/loadingSlice';
import perPageSlice from './slice/perPageSlice';

export const store = configureStore({
  reducer: {
    query: querySlice,
    perPage: perPageSlice,
    loading: loadingSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
