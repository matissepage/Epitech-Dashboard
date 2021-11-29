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
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';

const Container = styled.div`
  padding-left: 500px;
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