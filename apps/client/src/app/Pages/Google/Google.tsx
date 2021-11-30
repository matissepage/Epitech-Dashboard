import React, { useState } from 'react'
import phone from './../../../assets/Form/phone.svg';
import Draggable, { DraggableCore } from 'react-draggable';
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { TopBar } from '../../Components/TopBar/Topbar';
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';
import { GrFormAdd } from 'react-icons/gr';
import { IoIosAdd } from 'react-icons/io';
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';
import { AddWidget } from '../../Components/AddButton/AddWidget';
import { WidgetListGoogle } from '../../Components/AddButton/WidgetList';
import { IconType } from 'react-icons/lib';
import { Dropdown } from '../../Components/DropDown/DropDown';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-left: var(--sidebar-width);
`

export const Add = styled.div`
  width: 30px;
  height: 30px;
  background-color: var(--second-bg);
  color: var(--txt-color);
  border-radius: 50px;
  font-size: 1.5rem;
  font-style: bold;
  margin-top: 30px;
  margin-left: 1170px;
  top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const WidgetItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: var(--main-bg);
  &:hover {
    background-color: var(--second-bg);
  }
`

interface Widget {
  title: string
  count: string
  icon: IconType
  content: () => JSX.Element
}

const widgetsAvailable: Widget[] = [
  {
    title: 'Google Maps',
    count: 'test',
    icon: AiFillGoogleCircle,
    content: GithubFollowers,
  },
  {
    title: 'Youtube',
    count: 'test',
    icon: AiFillGoogleCircle,
    content: GithubFollowers,
  },
]



export const GooglePage = () => {
  const [widget, setwidget] = useState<Widget[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}

  const display = (title: string) => {
    if (title === "Youtube")
      setwidget([...widget, widgetsAvailable[1]])
    else if (title === "Google Maps")
      setwidget([...widget, widgetsAvailable[0]])
  }

  const renderList =(item: any, index:any) => (
    <div onClick={() =>display(item.title)} key={index}>
      <WidgetItem>
        <i>{item.icon}</i>
        <span>{item.title}</span>
      </WidgetItem>
    </div>
  )

  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Add>
          <Dropdown
              icon= {<IoIosAdd style={style}/>}
              contentData={widgetsAvailable}
              renderItems={(item: any, index:any) => renderList(item, index)}
            />
        </Add>
        {
          widget.map((item, i) => {
            return (
              <Draggable>
                <div>
                  <Widget icon={item.icon} count={item.count} title={item.title} child={item.content}/>
                </div>
              </Draggable>
            )
          })
        }
      </Container>
    </>
  )
}