import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { Button } from '../Button';

export interface TodoItemProps {
  id: string;
  task?: string;
}
interface TodoItemElementProps extends TodoItemProps {
  btnType: 'button' | 'reset' | 'submit';
  btnValue: 'add' | 'del';
  btnClicked?: (e: React.MouseEvent<HTMLElement>) => void;
  onBlur?: () => void;
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
    register,
    formState: { errors },
  } = useFormContext();
  const { id, task, btnType, btnValue, btnClicked } = props;
  const name = `task-${props.id}`;
  return (
    <div>
      <TodoInputStyled
        type='text'
        id={id}
        value={task}
        {...register(name, {
          required: '入力必須',
          minLength: {
            value: 5,
            message: '5文字以上',
          },
          maxLength: {
            value: 25,
            message: '25文字以下',
          },
        })}
      />
      <Button id={id} type={btnType} value={btnValue} onClick={btnClicked} />
      {errors.task && <p>{`*${errors.task.message}`}</p>}
    </div>
  );
};
