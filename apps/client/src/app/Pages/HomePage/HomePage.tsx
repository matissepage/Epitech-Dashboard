import React from 'react'
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { TopBar } from '../../Components/TopBar/Topbar';

const Container = styled.div`
  padding-left: 500px;
`

export const HomePage = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
          Please Login
      </Container>
    </>
  )
}