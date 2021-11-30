import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import Draggable, { DraggableCore } from 'react-draggable';
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { TopBar } from '../../Components/TopBar/Topbar';
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';

const Container = styled.div`
  padding-left: var(--sidebar-width);
`

export const TradingViewPage = () => {
  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Draggable>
          <div>
            <Widget icon={FaMoneyCheckAlt} count="Bitcoin" title="Trading Services" child={GithubProfile}/>
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={FaMoneyCheckAlt} count="Forex" title="Trading Services" child={GithubProfile}/>
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Widget icon={FaMoneyCheckAlt} count="Wallet" title="Trading Services" child={GithubProfile}/>
          </div>
          </Draggable>
      </Container>
    </>
  )
}