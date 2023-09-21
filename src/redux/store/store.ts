import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../features/currentTestState";

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
