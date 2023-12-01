import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    formData:formSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;