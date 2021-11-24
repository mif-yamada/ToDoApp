import React from 'react';
import styled from '@emotion/styled';

export interface TodoItemProps {
  id: string;
  task: string;
}
interface TodoItemEventProps extends TodoItemProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoItemStyled = styled.input`
  display: inline-block;
  width: 300px;
  height: 30px;
  margin-right: 20px;
  font-size: 18px;
`;

export const TodoItem: React.FC<TodoItemEventProps> = (
  props: TodoItemEventProps
) => {
  const { id, task, onChange } = props;
  return (
    <TodoItemStyled
      type='text'
      id={id}
      value={task}
      onChange={onChange}
    ></TodoItemStyled>
  );
};
