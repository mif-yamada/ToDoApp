import * as yup from 'yup';

export const todoItemSchema = yup.object().shape({
  task: yup.string().required('入力必須').min(5, '5文字以上').max(20,'20文字以下'),
});
export const todoSchema = yup.object().shape({
  inputTask: yup.string().required('入力必須').min(5, '5文字以上').max(20, '20文字以下'),
  todoData:yup.array(todoItemSchema)
});

export interface TodoItemProps {
  index?: number;
  task: string;
  error?: string;
}
export interface TodoListProps {
  inputTask: string;
  todoData: TodoItemProps[];
}
