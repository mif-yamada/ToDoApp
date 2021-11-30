import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "redux/todoSlice";

export const todoStore = configureStore({
  reducer: todoReducer
});

// export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;
