import React from 'react'
import { Rnd } from 'react-rnd';
import Draggable, { DraggableCore } from 'react-draggable';
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillGoogleCircle,
  AiFillGithub,
} from 'react-icons/ai';
import { BsSpotify } from 'react-icons/bs';
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
          <Widget icon={<AiFillGoogleCircle />} count="Agenda" title="Google Services"/>
          <Widget icon={<AiFillGoogleCircle />} count="Agenda" title="Google Services"/>
          <Widget icon={<AiFillGithub />} count="Agenda" title="Google Services"/>
          <Widget icon={<BsSpotify />} count="Agenda" title="Google Services"/>
          <Widget icon={<AiFillGoogleCircle />} count="Agenda" title="Google Services"/>
      </Container>
    </>
  )
}