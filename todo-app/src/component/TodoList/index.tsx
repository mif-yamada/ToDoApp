import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';

import styled from '@emotion/styled';

import { TodoItem, TodoItemProps } from '../TodoItem';
interface TodoListProps {
  todoData?: TodoItemProps[];
}

interface TodoListEventProps extends TodoListProps {
  addItem?: (todoData: TodoItemProps) => void;
  delItem?: (e: React.MouseEvent<HTMLElement>) => void;
  editItem?: () => void;
}

const TodoListStyled = styled.ul`
  display: inline-block;
  text-align: center;
  background: #fffcf4;
  border-radius: 8px;
  box-shadow: 0px 0px 5px silver;
  padding: 0 0 20px 0;
`;

const TodoItemsStyled = styled.li`
  display: block;
  list-style-type: none;
  margin: 20px 20px;
  width: 450px;
  height: 40px;
`;

export const TodoList: React.FC<TodoListEventProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoListProps>({
    defaultValues: {
      todoData: [{ task: '' }],
    },
    mode: 'onSubmit',
  });

  const { fields, append, remove,update } = useFieldArray({
    control,
    name: 'todoData' as never,
  });

  const addItem = (todoList: TodoListProps) => {
    const newData = todoList?.todoData?.[0].task;
    append({ task: newData });
    update(0, { task: '' });
  };

  return (
    <TodoListStyled>
      {fields.map((field, index) => {
        const taskName = `todoData.${index}.task`;
        if (index === 0) {
          return (
            <TodoItemsStyled key={field.id}>
              <Controller
                name={taskName as `todoData.${number}.task`}
                control={control}
                defaultValue=''
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
                render={({ field: { value, onBlur, onChange } }) => (
                  <TodoItem
                    index={index}
                    task={value as string}
                    onChange={onChange}
                    onBlur={onBlur}
                    btnType='submit'
                    btnValue='add'
                    btnClicked={handleSubmit(addItem)}
                    error={
                      errors?.todoData?.[index]?.task
                        ? `${errors?.todoData?.[index]?.task?.message}`
                        : ''
                    }
                  />
                )}
              />
            </TodoItemsStyled>
          );
        } else {
          return (
            <TodoItemsStyled key={field.id}>
              <Controller
                name={taskName as `todoData.${number}.task`}
                control={control}
                rules={{
                  required: '入力必須',
                  minLength: {
                    value: 5,
                    message: '5文字以上',
                  },
                  maxLength: {
                    value: 25,
                    message: '25文字以下',
                  },
                }}
                render={({ field: { value, onBlur, onChange } }) => (
                  <TodoItem
                    index={index}
                    task={value as string}
                    onChange={onChange}
                    onBlur={handleSubmit(onBlur)}
                    btnType='button'
                    btnValue='del'
                    btnClicked={() => remove(index)}
                    error={
                      errors?.todoData?.[index]?.task
                        ? `${errors?.todoData?.[index]?.task?.message}`
                        : ''
                    }
                  />
                )}
              />
            </TodoItemsStyled>
          );
        }
      })}
    </TodoListStyled>
  );
};
