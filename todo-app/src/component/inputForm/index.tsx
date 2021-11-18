import React from 'react';
import styled from '@emotion/styled';
import { idText } from 'typescript';

interface TodoFormProps {
  index: string;
  todoTask: string;
  setTask: () => string;
}

const TodoFormStyled = styled.input``;

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { index, todoTask, setTask } = props;
  return (
    <TodoFormStyled></TodoFormStyled>
  );
};
