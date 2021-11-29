import React from 'react'
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import { TopBar } from '../../Components/TopBar/Topbar';

const Container = styled.div`
  padding-left: var(--sidebar-width);
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