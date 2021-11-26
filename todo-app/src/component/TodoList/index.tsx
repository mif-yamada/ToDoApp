import React from 'react';
import styled from '@emotion/styled';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import { TodoForm } from '../inputForm';
import { TodoItem, TodoItemProps } from '../TodoItem';

export interface TodoListProps {
  todoData?: TodoItemProps[];
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
  padding-left: 30px;
  width: 450px;
  height: 40px;
`;

export const TodoList: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useForm<TodoListProps>({
    mode: 'onChange',
  });

  const { fields, append, remove, update } = useFieldArray<TodoListProps>({
    control,
    name: 'todoData' as never,
  });

  const dispatchData = () => {
    console.log(fields);
  };

  const addItem = (todoData: TodoItemProps) => {
    console.log(todoData);
    append(todoData);
  };

  const delItem = (e: React.MouseEvent<HTMLElement>) => {
    const delIndex = Number(e.currentTarget.id);
    remove(delIndex);
  };

  const editItem = (index: number, editValue: Partial<TodoItemProps>) => {
    update(index, { task: editValue as string });
  };

  return (
    <TodoListStyled>
      <TodoItemsStyled>
        <TodoForm addItem={addItem} />
      </TodoItemsStyled>
      {fields.map((field, index) => {
        const taskName = `todoData.${index}.task`;
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
                  value: 20,
                  message: '20文字以下',
                },
              }}
              render={({ field: { value, onChange } }) => (
                <TodoItem
                  index={index}
                  task={value}
                  onChange={onChange}
                  btnType='button'
                  btnValue='up'
                  btnClicked={() => {
                    editItem(index, value as Partial<TodoItemProps>);
                  }}
                  delTask={delItem}
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
      })}
      {dispatchData()}
    </TodoListStyled>
  );
};
