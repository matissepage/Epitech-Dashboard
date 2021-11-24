import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import * as Styled from '../../Components/Form/styled'
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
import { TopBar } from '../../Components/TopBar/Topbar';
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';

const Container = styled.div`
  padding-left: var(--sidebar-width);
`


export const HomePage = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        {/* <Draggable>
          <div>
            <Widget icon={<AiFillGoogleCircle />} count="Agenda" title="Google Services"/>
          </div>
        </Draggable> */}
        <Draggable>
          <div>
            <Widget icon={AiFillGithub} count="Commit" title="Github Services" child={GithubFollowers} />
          </div>
          </Draggable>
      </Container>
    </>
  )
}