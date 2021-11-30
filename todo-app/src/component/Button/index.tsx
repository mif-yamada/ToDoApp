import React from 'react';
import { Button } from 'antd';
import {
  PlusCircleFilled,
  MinusCircleFilled,
  UpCircleFilled,
} from '@ant-design/icons';
import styled from '@emotion/styled/macro';

interface ButtonProps {
  id: string;
  value: 'add' | 'del' | 'up';
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const TodoButtonStyled = styled(Button)`
  display: float;
  float: left;
`;

const AddIcon = styled(PlusCircleFilled)`
  font-size: 30px !important;
  `;
const DelIcon = styled(MinusCircleFilled)`
  font-size: 30px !important;
`;
const UpIcon = styled(UpCircleFilled)`
  font-size: 30px !important;
`;

export const TodoButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { id, value, disabled = false, onClick } = props;
  const getMark = () => {
    switch (value) {
      case 'add':
        return <AddIcon />;
      case 'del':
        return <DelIcon />;
      case 'up':
        return <UpIcon />;
      default:
        return '';
    }
  };
  const iconStyle = getMark();
  return (
    <TodoButtonStyled
      id={id}
      type='text'
      value={value}
      icon={iconStyle}
      size='large'
      shape='circle'
      disabled={disabled}
      onClick={onClick}
    ></TodoButtonStyled>
  );
};
