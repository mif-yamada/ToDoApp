import React, {useState}from 'react';
import styled from '@emotion/styled';

import { Button } from './component/Button';
import { TodoForm } from './component/inputForm';
import { TodoList } from './component/TodoList';

  const AppStyled = styled.div`
    text-align: center;
  `;

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setTaskList((taskList) => [...taskList, task]);
    setTask('');
  };

  // TODO:削除ボタン
  // const delTask = () => {
  //   taskList
  //   setTaskList
  // }

  return (
    <AppStyled>
      <Button type='button' value='add' onClick={addTask}></Button>
      <Button type='button' value='del' onClick={addTask}></Button>
      <TodoForm value={task} onChange={handleNewTask}></TodoForm>
      <TodoList tasks={taskList}></TodoList>
    </AppStyled>
  );
};

export default App;
