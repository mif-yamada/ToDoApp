import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TodoItem, TodoItemProps } from '../TodoItem';
import {
  TodoListStyled,
  TodoItemsStyled,
} from 'component/TodoList/TodoListStyled';
import { todoSchema, defaultValues } from 'schema/schema';
import { AddTodo, DeleteTodo, UpdateTodo } from 'redux/todoSlice';
import { useSelector } from 'react-redux';

export interface TodoListProps {
  addTask: string;
  todoData: TodoItemProps[];
}

export const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todoItemList = useAppSelector((state) => state.todoData);
  const selectorData = useSelector<TodoListProps, TodoItemProps[]>(
    (state) => state.todoData
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<TodoListProps>({
    mode: 'onChange',
    resolver: yupResolver(todoSchema),
    defaultValues,
  });

  const { fields, replace, append, remove, update } =
    useFieldArray<TodoListProps>({
      control,
      name: 'todoData',
    });

  const replaceTodoData = () => {
    replace(todoItemList);
    console.log(todoItemList);
    console.log(selectorData);
  };

  // useEffect(() => {
  //   replaceTodoData();
  // }, []);

  const addItem = (inputData: TodoListProps) => {
    const newTodoData = inputData.addTask;
    // append({ task: newTodoData });
    dispatch(
      AddTodo({
        task: newTodoData,
      })
    );
    resetField('addTask');
    // replaceTodoData();
    // console.log(useAppSelector((state) => state.todoData));
  };

  const delItem = (e: React.MouseEvent<HTMLElement>) => {
    const delIndex = Number(e.currentTarget.id);
    // remove(delIndex);
    dispatch(DeleteTodo({ index: delIndex,task:'' }));
    // replaceTodoData();
  };

  const editItem = (index: number, editTask: string) => {
    // update(index, { task: editTask });
    dispatch(UpdateTodo({ index: index, task: editTask }));
    replaceTodoData();
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
      {console.log(todoItemList)}
      {console.log(selectorData)}
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
    </TodoListStyled>
  );
};
