import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import queryReducer from '../reducers/queryReducer';
import charactersReducer from '../reducers/charactersReducer';
import characterByIdReducer from '../reducers/characterByIdReducer';

export const store = configureStore({
  reducer: {
    query: queryReducer,
    characters: charactersReducer,
    characterById: characterByIdReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
