import React from 'react';
import styled from '@emotion/styled';

export interface TodoItemProps {
  id: string;
  task: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TodoItemStyled = styled.input`
  display: inline-block;
  width: 300px;
  height: 30px;
`;

export const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { id, task, onChange, onBlur} = props;
  return (
    <TodoItemStyled
      type='text'
      id={id}
      value={task}
      onChange={onChange}
      onBlur={onBlur}
    ></TodoItemStyled>
  );
};
