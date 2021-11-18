import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  value: string;
  onClick?: () => void;
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

  background-color: ${(props) =>
    props.value === 'add'
      ? 'rgb(234, 154, 190)'
      : 'rgb(154, 178, 234)'};
  box-shadow: ${(props) =>
    props.value === 'add'
      ? '0 2px 2px rgb(203, 93, 139)'
      : '0 2px 2px rgb(93, 104, 203)'};
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { value } = props;
  const label = value === 'add' ? '+' : '−';
  return (
    <ButtonStyled type='button' value={value}>
      {label}
    </ButtonStyled>
  );
};
