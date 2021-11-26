import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { TodoItem, TodoItemProps } from '../TodoItem';

interface TodoFormProps {
  addItem: (todoData: TodoItemProps) => void;
}

export const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { addItem } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<TodoItemProps>({
    mode: 'onChange',
    defaultValues: {
      task:''
    }
  });

  const addTodo = (todoData: TodoItemProps) => {
    addItem(todoData);
    resetField('task');
  };

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <Controller
        name='task'
        control={control}
        rules={{
          required: '入力必須',
          minLength: {
            value: 5,
            message: '5文字以上',
          },
          maxLength: {
            value: 20,
            message: '20文字以下',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TodoItem
            task={value}
            onChange={onChange}
            btnType='submit'
            btnValue='add'
            error={errors.task ? `${errors.task.message}` : ''}
          />
        )}
      />
    </form>
  );
};
