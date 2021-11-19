import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import shortid from 'shortid';

import { Button } from './component/Button';
import { TodoForm } from './component/inputForm';
import { TodoList } from './component/TodoList';
import { TodoItemProps } from './component/TodoItem';

const AppStyled = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [itemList, setItemList] = useState<TodoItemProps[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>('');

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    const uniqueId = shortid.generate();
    const newTaskList = [...itemList, { id: uniqueId, task: task }];
    setItemList(newTaskList);
    setTask('');
  };

  const delTask = (e: React.MouseEvent<HTMLElement>) => {
    const delId = e.currentTarget.id;
    const newItemList = itemList.filter((item) => item.id !== delId);
    setItemList(newItemList);
  };

  const editTime = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditTask(e.target.value);
    setIsEdit(true);
  };

  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(isEdit);
    setEditTask(e.target.value);
  };

  const setEditItem = (e: React.FocusEvent<HTMLInputElement>) => {
    const editItemId = e.target.id;
    const newTaskList = itemList.map((item) =>
      item.id === editItemId
        ? { ...item, task: e.target.value }
        : { ...item, task: task }
    );
    setItemList(newTaskList);
    setEditTask('');
    setIsEdit(false);
  };

  return (
    <AppStyled>
      <header>
        <h1>TODO-APP</h1>
      </header>
      <section>
        <form>
          <TodoForm task={task} onChange={handleNewTask}></TodoForm>
          <Button type='button' value='add' onClick={addTask}></Button>
        </form>
        <TodoList
          items={itemList}
          edit={isEdit}
          editTask={editTask}
          delTodo={delTask}
          onChangeItem={editItem}
          onFocusItem={editTime}
          onBlurItem={setEditItem}
        ></TodoList>
      </section>
    </AppStyled>
  );
};

export default App;
