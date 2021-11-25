import React from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

interface ButtonProps {
  id: string;
  type: 'button' | 'reset' | 'submit';
  value: 'add' | 'del';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const ButtonStyled = styled.button`
  display: inline-block;
  width: 40px;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #fef9ff;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;

  &:active {
    box-shadow: none;
    position: relative;
    top: 2px;
  }
  ${(props) => props.value === 'add' && AddButton};
  ${(props) => props.value === 'del' && DelButton};
`;

const AddButton = css`
  background-color: rgb(234, 154, 190);
  box-shadow: 0 2px 2px rgb(203, 93, 139);
`;

const DelButton = css`
  background-color: rgb(154, 171, 234);
  box-shadow: 0 2px 2px rgb(93, 104, 203);
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { id, type, value,onClick } = props;
  const label = value === 'add' ? '+' : '−';
  return (
    <ButtonStyled id={id} type={type} value={value} onClick={onClick} >
      {label}
    </ButtonStyled>
  );
};
