import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../features/currentTestState";
import { addTestSlice } from "../features/addTest";

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    addTestSlice: addTestSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
