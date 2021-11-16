import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import * as Styled from '../../Components/Form/styled'
import { SideBar } from '../../Components/Sidebar/Sidebar';
import { Home } from '../../Components/Home/Home';
import styled from 'styled-components';

const Container = styled.div`
  left: 0;
`

export const HomePage = () => {
  return (
    <Container>
      <SideBar />
      <Home />
    </Container>
  )
}