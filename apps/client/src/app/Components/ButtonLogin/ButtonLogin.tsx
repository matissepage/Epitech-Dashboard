import styled from "styled-components";
import { IconType } from "react-icons/lib";
import React from 'react';


type Props = {
  icon: IconType,
  onClickCallback?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
}

export const ButtonLogin: React.FC<Props> = ({ icon, onClickCallback }): JSX.Element => {
  return (
    <Container onClick={onClickCallback}>
      {React.createElement(icon)}
    </Container>
  )
}

const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`