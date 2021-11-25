import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import styled from '@emotion/styled';

import { TodoItem, TodoItemProps } from '../TodoItem';
interface TodoListProps {
  addItem?:(todoData: TodoItemProps) => void;
  delItem?: (e: React.MouseEvent<HTMLElement>) => void;
  editItem?:()=>void;
}

const TodoListStyled = styled.ul`
  display: inline-block;
  text-align: center;
  background: #fffcf4;
  border-radius: 8px;
  box-shadow: 0px 0px 5px silver;
  padding: 0;
`;

const TodoItemsStyled = styled.li`
  display: block;
  list-style-type: none;
  margin: 10px 20px;
  width: 400px;
  height: 40px;
`;

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { delItem, editItem } = props;
    const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<TodoItemProps>({
      defaultValues: {
        task: '',
      },
    });
  const { fields, append, remove } = useFieldArray({ control, name: 'todo' as never });

    const addItem = (todoData: TodoItemProps) => {
      console.log(todoData);
      reset;
    };

  // const resetItem = {
  //   reset;
  // };

  return (
    <TodoListStyled>
      {fields.map((field,index) => {
        return (
          //liのkeyが変更され、再描画が入ってしまった
          //inputのshortid(id)を渡すことで解決
          <TodoItemsStyled key={field.id}>
            {/* <TodoItem
              id={item.id}
              task={item.task}
              btnType='button'
              btnValue='del'
              btnClicked={delItem}
              onBlur={editItem}
            /> */}
            <Controller
              name={`todo.${index}.task` as 'todo.0.task'}
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
                  // id={id}
                  task={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  btnType='submit'
                  btnValue='add'
                  btnClicked={handleSubmit(addItem)}
                  error={errors.task && `${errors.task.message}`}
                />
              )}
            />
          </TodoItemsStyled>
        );
      })}
    </TodoListStyled>
  );
};
