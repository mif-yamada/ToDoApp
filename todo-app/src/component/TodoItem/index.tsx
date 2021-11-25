import React from 'react';
import styled from '@emotion/styled';
import { Button } from '../Button';

export interface TodoItemProps {
  'todo.0.task'?:string;
  id?: string;
  task: string;
  error?: string;
}
export interface TodoItemElementProps extends TodoItemProps {
  btnType: 'button' | 'submit';
  btnValue: 'add' | 'del';
  btnClicked?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  editTask?:(data:TodoItemProps)=>void;
}

const TodoInputStyled = styled.input`
  display: inline-block;
  width: 300px;
  height: 30px;
  margin-right: 20px;
  font-size: 18px;
`;

export const TodoItem: React.FC<TodoItemElementProps> = (
  props: TodoItemElementProps
) => {
  const {
    id,
    task,
    error,
    btnType,
    btnValue,
    btnClicked,
    onChange,
    onBlur,
  } = props;
  return (
    <div>
      <TodoInputStyled
        type='text'
        id={id}
        value={task}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Button id={id} type={btnType} value={btnValue} onClick={btnClicked} />
      {error && <p>{`*${error}`}</p>}
    </div>
  );
};
