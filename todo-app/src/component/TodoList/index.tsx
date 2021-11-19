import React from 'react';
import styled from '@emotion/styled';
import shortid from 'shortid';

import { Button } from '../Button';
import { TodoItem, TodoItemProps } from '../TodoItem';
interface TodoListProps {
  items: TodoItemProps[];
  edit?: boolean;
  editTask: string;
  delTodo: (e: React.MouseEvent<HTMLElement>) => void;
  onChangeItem?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurItem?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocusItem?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TodoListStyled = styled.ul`
  text-align: center;
  background: #fffcf4;
  border-radius: 8px; /*角の丸み*/
  box-shadow: 0px 0px 5px silver; /*5px=影の広がり具合*/
  padding: 0;
  position: relative;
`;

const TodoItemsStyled = styled.li`
  display: inline-block;
  text-align: center;
  line-height: 1.5;
  padding: 0.5em 0;
  list-style-type: none;
`;

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const {
    items,
    edit,
    editTask,
    delTodo,
    onChangeItem,
    onBlurItem,
    onFocusItem,
  } = props;
  return (
    <TodoListStyled>
      {items.map(item => {
        const uniqueId = shortid.generate();
        return (
          <TodoItemsStyled key={uniqueId}>
            <TodoItem
              id={item.id}
              task={edit ? editTask : item.task}
              onChange={onChangeItem}
              onBlur={onBlurItem}
              onFocus={onFocusItem}
            ></TodoItem>
            <Button
              id={item.id}
              type='button'
              value='del'
              onClick={delTodo}
            ></Button>
          </TodoItemsStyled>
        );}
        )}
    </TodoListStyled>
  );
};
