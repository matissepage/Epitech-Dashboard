import * as Styled from './styled'
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo from './../../../assets/Form/spaceship.svg';

export const SideBar = () => {

  return (
    <React.Fragment>
      <Styled.SidebarNav>
          <Styled.ProfileImg src={Logo} alt="Logo Dashboard"/>
          <Styled.TitleText>DASHBOARD</Styled.TitleText>
          <Styled.TitleText>Account</Styled.TitleText>
      </Styled.SidebarNav>
    </React.Fragment>
  ); 
}