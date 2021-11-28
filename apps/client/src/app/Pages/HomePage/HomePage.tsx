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
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';

const Container = styled.div`
  padding-left: var(--sidebar-width);
`


export const HomePage = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Draggable>
          <div>
            <Widget icon={AiFillGithub} count="Repository" title="Github Services" child={GithubRepositorys} />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={AiFillGithub} count="Profil" title="Github Services" child={GithubProfile} />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={AiFillGithub} count="Commit" title="Github Services" child={GithubFollowers} />
          </div>
          </Draggable>
      </Container>
    </>
  )
}