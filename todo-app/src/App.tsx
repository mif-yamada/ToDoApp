import React from 'react';
import styled from '@emotion/styled';

import { TodoList } from './component/TodoList';

const AppStyled = styled.div`
  text-align: center;
  color: rgb(41, 85, 129);
`;
const TodoItemsStyled = styled.div`
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <AppStyled>
      <header>
        <h1>TODO-APP</h1>
      </header>
      <TodoItemsStyled>
        <TodoList/>
      </TodoItemsStyled>
    </AppStyled>
  );
};

export default App;
