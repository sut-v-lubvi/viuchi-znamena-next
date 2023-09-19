import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  id?: number | null;
  name: string | null;
  lengthTest: number;
  correctAnswers: number;
  errors: number;
}

const initialState: CounterState = {
  id: null,
  name: "glhgkljglkjghjhg,k",
  lengthTest: 0,
  correctAnswers: 0,
  errors: 0,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addTestResult: (state, { payload }) => {
      (state.id = Number(payload.id)),
        (state.name = payload.name),
        (state.lengthTest = payload.lengthTest),
        (state.errors = payload.lengthTest - state.correctAnswers);
    },
    addCorrectAnswers: (state) => {
      state.correctAnswers += 1;
    },
    nullCorrectAnswers: (state) => {
      state.correctAnswers = 0;
      state.errors = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const actions = testSlice.actions;

export default testSlice.reducer;
