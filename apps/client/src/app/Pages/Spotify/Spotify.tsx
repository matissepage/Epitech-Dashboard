import React, { useState, useEffect } from 'react'
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
import { IconType } from 'react-icons/lib';
import { Dropdown } from '../../Components/DropDown/DropDown';
import { IoIosAdd } from 'react-icons/io';
import { SpotifyArtist } from '../../Components/Spotify/SpotifyArtist/SpotifyArtist';
import { SpotifyTrackWidget } from '../../Components/Spotify/SpotifyTrack/SpotifyTrack';
import { SpotifySearch } from '../../Components/Spotify/SpotifySearch/SpotifySearch';

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
    title: 'Artists',
    count: 'Widget',
    icon: BsSpotify,
    content: SpotifyArtist,
  },
  {
    title: 'Tracks',
    count: 'Widget',
    icon: BsSpotify,
    content: SpotifyTrackWidget,
  },
  {
    title: 'Listen',
    count: 'Widget',
    icon: BsSpotify,
    content: SpotifySearch,
  },
]

export const SpotifyPage = () => {
  const [widget, setwidget] = useState<Widget[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}
  const display = (title: string) => {
    if (title === "Artists")
      setwidget([...widget, widgetsAvailable[0]])
    else if (title === "Tracks")
      setwidget([...widget, widgetsAvailable[1]])
    else if (title === "Listen")
      setwidget([...widget, widgetsAvailable[2]])
    localStorage.setItem('widgets_spotify', JSON.stringify(widget))
  }

  const renderList =(item: any, index:any) => (
    <div onClick={() =>display(item.title)} key={index}>
      <WidgetItem>
        <i>{item.icon}</i>
        <span>{item.title}</span>
      </WidgetItem>
    </div>
  )

  useEffect(() => {
    const listSave = JSON.parse(localStorage.getItem('widgets_spotify') || '[]');
    for (const item of listSave) {
      for (const widgetAvailable of widgetsAvailable) {
        if (item.title === widgetAvailable.title) {
          setwidget(widget => [...widget, widgetAvailable]);
        }
      }
    }
  }, [])

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
              <div>
                <Widget icon={item.icon} count={item.count} title={item.title} child={item.content}/>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}