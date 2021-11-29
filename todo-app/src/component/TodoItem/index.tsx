import React from 'react';
import styled from '@emotion/styled';

import { Button } from 'component/Button';

export interface TodoItemProps {
  index?: number;
  task: string;
  error?: string;
}
export interface TodoItemElementProps extends TodoItemProps {
  btnType: 'button' | 'submit';
  btnValue: 'add' | 'del' | 'up';
  btnClicked?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  delTask?: (e: React.MouseEvent<HTMLElement>) => void;
}

const TodoInputStyled = styled.input`
  display: float;
  width: 300px;
  height: 30px;
  margin-right: 20px;
  font-size: 18px;
  float: left;
`;

const ErrorMessageStyled = styled.p`
  height: 18px;
  width: 100px;
  margin: 0 0 auto;
  color: rgb(222, 53, 87);
  font-size: 12px;
`;

export const TodoItem: React.FC<TodoItemElementProps> = (
  props: TodoItemElementProps
) => {
  const {
    index,
    task,
    error,
    btnType,
    btnValue,
    btnClicked,
    onChange,
    onBlur,
    delTask,
  } = props;
  return (
    <div>
      <ErrorMessageStyled> {error && `*${error}`} </ErrorMessageStyled>
      <div>
        <TodoInputStyled
          type='text'
          id={String(index)}
          value={task}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Button
          id={String(index)}
          type={btnType}
          value={btnValue}
          disabled={error !== ''}
          onClick={btnClicked}
        />
        {index !== undefined ? (
          <Button
            id={String(index)}
            type='button'
            value='del'
            disabled={false}
            onClick={delTask}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
