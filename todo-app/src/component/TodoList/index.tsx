import React from 'react';
import styled from '@emotion/styled';

interface TodoItemProps {
  index: number;
  task: string;
}
interface TodoListProps {
  tasks: string[];
}

const TodoItemStyled = styled.li``;

const TodoListStyled = styled.ul``;

const TodoItems: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { index, task } = props;
  return (
    <TodoItemStyled key={index} value={task}>
      {task}
    </TodoItemStyled>
  );
};

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { tasks } = props;
  return <TodoListStyled>{tasks.map((todo, idx) => {
    return (
      <TodoItems key={idx} index={idx} task={todo}></TodoItems>);
  })}</TodoListStyled>;
};
