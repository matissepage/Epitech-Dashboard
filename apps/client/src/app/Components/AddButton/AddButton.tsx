import styled from "styled-components";
import React from 'react';
import { AlertTitleClassKey } from "@mui/material";

type Props = {
  onClickCallback?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
}

const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--main-bg);
  color: var(--txt-color);
  border-radius: 50px;
  font-size: 1.5rem;
  font-style: bold;
  margin-top: 30px;
  margin-left: 1170px;
  top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const AddButton: React.FC<Props> = ({ onClickCallback }): JSX.Element => {
  return (
    <Container onClick={onClickCallback}>
        +
    </Container>
  )
}