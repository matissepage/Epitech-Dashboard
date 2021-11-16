import * as Styled from './styled'
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {

  return (
    <React.Fragment>
      <Styled.SidebarNav>
        <Styled.TitleText>USERNAME</Styled.TitleText>
      </Styled.SidebarNav>
    </React.Fragment>
  ); 
}