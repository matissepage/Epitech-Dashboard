import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import Draggable, { DraggableCore } from 'react-draggable';
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import { BsSpotify } from 'react-icons/bs';
import { TopBar } from '../../Components/TopBar/Topbar';
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';

const Container = styled.div`
  padding-left: var(--sidebar-width);
`

export const SpotifyPage = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Draggable>
          <div>
            <Widget icon={BsSpotify} count="Playlist" title="Spotify Services" child={GithubProfile}/>
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={BsSpotify} count="Ecoute en cours" title="Spotify Services" child={GithubProfile}/>
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={BsSpotify} count="Profil" title="Spotify Services" child={GithubProfile}/>
          </div>
          </Draggable>
      </Container>
    </>
  )
}