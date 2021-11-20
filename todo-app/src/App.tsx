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
  const [editTask, setEditTask] = useState<string>('');
  const [editTaskId, setEditTaskId] = useState<string>('');

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

  const editItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTaskId(e.target.id);
    setEditTask(e.target.value);
  };

  useEffect(() => {
    setItemList(
      itemList.map((item) =>
        item.id === editTaskId ? { ...item, task: editTask } : item
      )
    );
  }, [editTask]);


  const setEditItem = () => {
    const newTaskList = itemList.map((item) =>
      item.id === editTaskId ? { ...item, task: editTask } : item
    );
    setItemList(newTaskList);
    setEditTaskId('');
    setEditTask('');
  };

  return (
    <AppStyled>
      <header>
        <h1>TODO-APP</h1>
      </header>
      <section>
        <TodoForm task={task} onChange={handleNewTask}></TodoForm>
        <Button type='button' value='add' onClick={addTask}></Button>
        <TodoList
          items={itemList}
          delTodo={delTask}
          onChangeItem={editItem}
          onBlurItem={setEditItem}
        ></TodoList>
      </section>
    </AppStyled>
  );
};

export default App;
