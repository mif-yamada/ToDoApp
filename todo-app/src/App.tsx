import React from 'react';
import styled from '@emotion/styled';

import { Button } from './component/Button';

  const AppStyled = styled.div`
    text-align: center;
  `;

const App: React.FC = () => {
  return (
    <AppStyled>
      <Button value='add'></Button>
      <Button value='del'></Button>
    </AppStyled>
  );
};

export default App;
