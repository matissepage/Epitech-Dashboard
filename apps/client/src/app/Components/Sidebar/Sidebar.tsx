import * as Styled from './styled'
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Dashboard from './../../../assets/Form/spaceship.svg';
import Logo from './../../../assets/Form/spaceship.svg';
import styled from 'styled-components';
import { MenuList } from './DropMenu/MenuList'
import { AiOutlineClose } from 'react-icons/ai';
import { Submenu } from './DropMenu/DropMenu';

export const SideBar = () => {
  return (
    <React.Fragment>
      <Styled.Container>
        <Styled.ProfileImg src={Dashboard} alt="Logo Dashboard"/>
        <Styled.TitleText>DASHBOARD</Styled.TitleText>
        <Styled.SidebarWrap>
          {MenuList.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </Styled.SidebarWrap>
      </Styled.Container>
    </React.Fragment>
  ); 
}