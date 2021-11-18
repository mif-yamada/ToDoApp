import React from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  value: 'add' | 'del';
  onClick: () => void;
}

const ButtonStyled = styled.button`
  display: inline-block;
  margin: 5px 20px;
  padding: 0px 10px;
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
  ${props=> props.value === 'add' && AddButton};
  ${props=> props.value === 'del' && DelButton};
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
  const { type, value, onClick } = props;
  const label = value === 'add' ? '+' : '−';
  return (
    <ButtonStyled type={type} value={value} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
