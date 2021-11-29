import React from 'react';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';

// import { todoStore } from './redux/store';
import { TodoList } from './component/TodoList';

const AppStyled = styled.div`
  text-align: center;
  color: rgb(41, 85, 129);
`;
const TodoFrontStyled = styled.div`
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    // <Provider store={todoStore}>
      <AppStyled>
        <header>
          <h1>TODO-APP</h1>
        </header>
        <TodoFrontStyled>
          <TodoList />
        </TodoFrontStyled>
      </AppStyled>
    // </Provider>
  );
};

export default App;
