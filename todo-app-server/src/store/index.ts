import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "store/slice";

export const store = configureStore({
  reducer: {
    todoApp: todoReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
