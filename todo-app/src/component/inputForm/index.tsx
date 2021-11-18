import React from 'react';
import styled from '@emotion/styled';

interface TodoFormProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoFormStyled = styled.input``;

export const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { value, onChange } = props;
  return (
    <TodoFormStyled type="text" value={value} onChange={onChange}></TodoFormStyled>
  );
};
