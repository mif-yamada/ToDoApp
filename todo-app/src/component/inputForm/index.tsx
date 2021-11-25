import React from 'react';
import styled from '@emotion/styled';

interface TodoFormProps {
  task: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoFormStyled = styled.input`
  display: inline-block;
  width: 300px;
  height: 30px;
  margin-right: 20px;
  font-size: 18px;
`;

export const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { task, onChange } = props;
  return (
    <TodoFormStyled
      type='text'
      value={task}
      onChange={onChange}
    ></TodoFormStyled>
  );
};
