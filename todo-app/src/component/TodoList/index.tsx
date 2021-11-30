import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TodoItemsStyled,
  TodoListStyled,
} from 'component/TodoList/TodoListStyled';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { AddTodo, DeleteTodo, TodoState, UpdateTodo } from 'redux/todoSlice';
import { TodoListProps, todoSchema } from 'schema/schema';
import { TodoItem, TodoItemProps } from '../TodoItem';
import { todoStore } from 'redux/store';

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoItemList = useSelector<TodoState, TodoItemProps[]>(
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
    defaultValues: {
      inputTask: '',
      todoData: todoItemList,
    },
  });

  const { fields, replace } = useFieldArray<TodoListProps>({
    control,
    name: 'todoData',
  });

  const replaceTodoData = () => {
    replace(todoItemList);
  };

  useEffect(() => {
    replaceTodoData();
  }, [todoStore.getState()]);

  const addItem = (inputData: TodoListProps) => {
    const newTodoData = inputData.inputTask;
    dispatch(AddTodo(newTodoData));
    resetField('inputTask');
  };

  const delItem = (e: React.MouseEvent<HTMLElement>) => {
    const delIndex = Number(e.currentTarget.id);
    dispatch(DeleteTodo({ index: delIndex, task: '' }));
  };

  const editItem = (index: number, editTask: string) => {
    dispatch(UpdateTodo({ index: index, task: editTask }));
  };

  return (
    <TodoListStyled>
      <TodoItemsStyled>
        {/* <form onSubmit={handleSubmit(addItem)}> */}
          <Controller
            name='inputTask'
            control={control}
            render={({ field: { value, onChange } }) => (
              <TodoItem
                task={value}
                onChange={onChange}
                btnValue='add'
                btnClicked={handleSubmit(addItem)}
                error={errors?.inputTask ? `${errors?.inputTask.message}` : ''}
              />
            )}
          />
        {/* </form> */}
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
