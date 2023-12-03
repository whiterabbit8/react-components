import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  acceptance: boolean;
}

const initialState: FormState = {
  name: '',
  age: 21,
  email: '',
  password: '',
  gender: '',
  acceptance: false,
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setAcceptance: (state, action: PayloadAction<boolean>) => {
      state.acceptance = action.payload;
    },
  },
});

export const {
  setName,
  setAge,
  setEmail,
  setPassword,
  setGender,
  setAcceptance,
} = formSlice.actions;

export default formSlice.reducer;
