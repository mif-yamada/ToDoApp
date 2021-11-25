import React from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItemProps>();

  const addTask = (todoData: TodoItemProps) => {
    console.log(todoData);
  };

  // const delTask = (
  //   todoData: TodoItemProps[],
  //   e: React.MouseEvent<HTMLElement>
  // ) => {
  //   const delId = e.currentTarget.id;
  //   const newItemList = todoData.filter((item) => {
  //     return item.id !== delId;
  //   });
  // };

  return (
    <AppStyled>
      <header>
        <h1>TODO-APP</h1>
      </header>
      <Controller
        name='task'
        control={control}
        rules={{
          required: '入力必須',
          minLength: {
            value: 5,
            message: '5文字以上',
          },
          maxLength: {
            value: 25,
            message: '25文字以下',
          },
        }}
        render={({ field:{value,onBlur,onChange}}) => (
          <TodoItem
            id={shortid.generate()}
            task={value}
            onChange={onChange}
            onBlur={onBlur}
            btnType='submit'
            btnValue='add'
          />
        )}
      />
      <TodoItemsStyled>
        {/* <TodoList items={itemList} delItem={delTask}></TodoList> */}
      </TodoItemsStyled>
    </AppStyled>
  );
};

export default App;
