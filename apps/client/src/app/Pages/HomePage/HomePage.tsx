import React from 'react'
import phone from './../../../assets/Form/phone.svg';
import * as Styled from '../../Components/Form/styled'
import { SideBar } from '../../Components/Sidebar/Sidebar';
import { Home } from '../../Components/Home/Home';

export const HomePage = () => {
  return (
    <>
      <SideBar />
      <Home />
    </>
  )
}