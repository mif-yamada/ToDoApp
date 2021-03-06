import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemProps } from 'schema';

export interface TodoState {
  todoData: TodoItemProps[];
}

const initialState: TodoState = {
  todoData: [
    {
      task: 'testTask',
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    AddTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.todoData = state.todoData.concat([{ task: action.payload }]);
    },
    DeleteTodo: (state: TodoState, action: PayloadAction<TodoItemProps>) => {
      state.todoData = state.todoData.filter(
        (item, index) => index !== action.payload.index
      );
    },
    UpdateTodo: (state: TodoState, action: PayloadAction<TodoItemProps>) => {
      state.todoData = state.todoData.map((item, index) =>
        index === action.payload.index
          ? { ...item, task: action.payload.task }
          : item
      );
    },
  },
});

export const { AddTodo, DeleteTodo, UpdateTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
