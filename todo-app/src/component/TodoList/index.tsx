import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TodoItem, TodoItemProps } from '../TodoItem';
import { TodoListStyled, TodoItemsStyled } from './TodoListStyled';
import { todoSchema, defaultValues } from '../../schema/schema';

export interface TodoListProps {
  addTask: string;
  todoData: TodoItemProps[];
}

export const TodoList: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<TodoListProps>({
    mode: 'onChange',
    resolver:yupResolver(todoSchema),
    defaultValues,
  });

  const { fields, append, remove, update } = useFieldArray<TodoListProps>({
    control,
    name: 'todoData',
  });

  const dispatchData = () => {
    console.log(fields);
  };

  const addItem = (inputData: TodoListProps) => {
    const newTodoData = inputData.addTask;
    console.log(newTodoData);
    append({ task: newTodoData });
    resetField('addTask');
  };

  const delItem = (e: React.MouseEvent<HTMLElement>) => {
    const delIndex = Number(e.currentTarget.id);
    remove(delIndex);
    console.log(fields);
  };

  const editItem = (index: number, editTask: string) => {
    update(index, { task: editTask });
    console.log(fields);
  };

  return (
    <TodoListStyled>
      <TodoItemsStyled>
        <form onSubmit={handleSubmit(addItem)}>
          <Controller
            name='addTask'
            control={control}
            render={({ field: { value, onChange } }) => (
              <TodoItem
                task={value}
                onChange={onChange}
                btnType='submit'
                btnValue='add'
                error={errors?.addTask ? `${errors?.addTask.message}` : ''}
              />
            )}
          />
        </form>
      </TodoItemsStyled>
      {fields.map((field, index) => {
        const taskName: `todoData.${number}.task` = `todoData.${index}.task`;
        return (
          <TodoItemsStyled key={field.id}>
            <Controller
              name={taskName}
              control={control}
              render={({ field: { value, onChange } }) => (
                <TodoItem
                  index={index}
                  task={value}
                  onChange={onChange}
                  btnType='button'
                  btnValue='up'
                  btnClicked={() => {
                    editItem(index, value);
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
