import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import shortid from 'shortid';

import { TodoList } from './component/TodoList';
import { TodoItem, TodoItemProps } from './component/TodoItem';

const AppStyled = styled.div`
  text-align: center;
  color: rgb(41, 85, 129);
`;
const TodoItemsStyled = styled.div`
  justify-content: center;
`;

const App: React.FC = () => {
  const [itemList, setItemList] = useState<TodoItemProps[]>([]);
  const [newId, setId] = useState<string>(shortid.generate());

  const methods = useForm<TodoItemProps>();

  const addTask = (todoData:TodoItemProps) => {
    const newTaskList = [...itemList, { id: newId, task: todoData.task}];
    setItemList(newTaskList);
    setId(shortid.generate());
  };

  const delTask = (e: React.MouseEvent<HTMLElement>) => {
    const delId = e.currentTarget.id;
    const newItemList = itemList.filter((item) => {
      return (item.id !== delId);
    });
    setItemList(newItemList);
  };

  return (
    <FormProvider {...methods}>
      <AppStyled>
        <header>
          <h1>TODO-APP</h1>
        </header>
        <form onSubmit={methods.handleSubmit(addTask)}>
          <TodoItem
            id={newId}
            btnType='submit'
            btnValue='add'
          />
        </form>
        <TodoItemsStyled>
          <TodoList items={itemList} delItem={delTask} ></TodoList>
        </TodoItemsStyled>
      </AppStyled>
    </FormProvider>
  );
};

export default App;
