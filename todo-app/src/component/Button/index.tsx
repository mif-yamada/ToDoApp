import React from 'react';
import { Button } from 'antd';
import {
  PlusCircleFilled,
  MinusCircleFilled,
  UpCircleFilled,
} from '@ant-design/icons';

interface ButtonProps {
  id: string;
  value: 'add' | 'del' | 'up';
  disabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const TodoButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { id, value, disabled = false, onClick } = props;
  const getMark = () => {
    switch (value) {
      case 'add':
        return <PlusCircleFilled style={{ fontSize: '30px' }} />;
      case 'del':
        return <MinusCircleFilled style={{ fontSize: '30px' }} />;
      case 'up':
        return <UpCircleFilled style={{ fontSize: '30px' }} />;
      default:
        return '';
    }
  };
  const label = getMark();
  return (
    <Button
      id={id}
      type='text'
      value={value}
      icon={label}
      size='large'
      shape='circle'
      disabled={disabled}
      onClick={onClick}
    >
    </Button>
  );
};
