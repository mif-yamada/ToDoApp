import React from 'react';
import styled from '@emotion/styled';
import { Input } from 'antd';

import { TodoButton } from 'component/Button';

export interface TodoItemProps {
  index?: number;
  task: string;
  error?: string;
}
export interface TodoItemElementProps extends TodoItemProps {
  btnValue: 'add' | 'del' | 'up';
  btnClicked?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  delTask?: (e: React.MouseEvent<HTMLElement>) => void;
}

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
        <Input
          style={{
            display: 'float',
            width: '300px',
            fontSize: '18px',
            float: 'left',
          }}
          placeholder='Basic usage'
          id={String(index)}
          value={task}
          onChange={onChange}
          onBlur={onBlur}
        />
        <TodoButton
          id={String(index)}
          value={btnValue}
          disabled={error !== ''}
          onClick={btnClicked}
        />
        {index !== undefined ? (
          <TodoButton
            id={String(index)}
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
