import React from 'react';
import styled from '@emotion/styled';

import { TodoItem, TodoItemProps } from '../TodoItem';
interface TodoListProps {
  items: TodoItemProps[];
  delItem: (e: React.MouseEvent<HTMLElement>) => void;
  editItem?:()=>void;
}

const TodoListStyled = styled.ul`
  display: inline-block;
  text-align: center;
  background: #fffcf4;
  border-radius: 8px;
  box-shadow: 0px 0px 5px silver;
  padding: 0;
`;

const TodoItemsStyled = styled.li`
  display: block;
  list-style-type: none;
  margin: 10px 20px;
  width: 400px;
  height: 40px;
`;

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { items, delItem,editItem } = props;
  return (
    <TodoListStyled>
      {items.map((item) => {
        return (
          //liのkeyが変更され、再描画が入ってしまった
          //inputのshortid(id)を渡すことで解決
          <TodoItemsStyled key={item.id}>
            <TodoItem
              id={item.id}
              task={item.task}
              btnType='button'
              btnValue='del'
              btnClicked={delItem}
              onBlur={editItem}
            />
          </TodoItemsStyled>
        );
      })}
    </TodoListStyled>
  );
};
