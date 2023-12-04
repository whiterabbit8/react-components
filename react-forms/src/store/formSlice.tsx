import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormData {
  name: string;
  age: string;
  email: string;
  password: string;
  passwordConfirm?: string;
  gender: string;
  acceptance: boolean;
}

export interface FormState {
  submitted: FormData[];
}

const initialState: FormState = {
  // name: '',
  // age: 21,
  // email: '',
  // password: '',
  // gender: '',
  // acceptance: false,
  submitted: [],
};

export const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    // setName: (state, action: PayloadAction<string>) => {
    //   state.name = action.payload;
    // },
    // setAge: (state, action: PayloadAction<number>) => {
    //   state.age = action.payload;
    // },
    // setEmail: (state, action: PayloadAction<string>) => {
    //   state.email = action.payload;
    // },
    // setPassword: (state, action: PayloadAction<string>) => {
    //   state.email = action.payload;
    // },
    // setGender: (state, action: PayloadAction<string>) => {
    //   state.gender = action.payload;
    // },
    // setAcceptance: (state, action: PayloadAction<boolean>) => {
    //   state.acceptance = action.payload;
    // },
    setSubmitted: (state, action: PayloadAction<FormData>) => {
      state.submitted.push(action.payload);
    },
  },
});

export const { setSubmitted } = formSlice.actions;

export default formSlice.reducer;
