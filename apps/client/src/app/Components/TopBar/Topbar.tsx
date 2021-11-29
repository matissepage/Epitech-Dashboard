import React from 'react';
import {
  Container,
  TopBarRight,
  TopBarItem,
  NotificationItem,
  TB_RightUser,
  TB_RightUserImage,
  TB_RightUserName,
  Search,
} from './styled';

import {
  AiFillBell
} from 'react-icons/ai'

import ProfilePicture from '../../../assets/Profile/profile.png';
import { Dropdown } from '../DropDown/DropDown';
import { Link } from 'react-router-dom';


// import user_menu from '../../../assets/JsonData/user_menu.json';
// import notifications from '../../../assets/JsonData/notification.json';
const user_menu = require('../../../assets/JsonData/user_menu.json');
const notifications = require('../../../assets/JsonData/notification.json');


const curr_user = {
  display_name: 'Matisse',
  image: {ProfilePicture}
}

const renderNotificationItem = (item:any, index:any) => (
  <NotificationItem key={index}>
      <i>{item.icon}</i>
      <span>{item.content}</span>
  </NotificationItem>
)

const renderUserToggle = (user:any) => (
  <TB_RightUser>
      <TB_RightUserImage>
          <img src={user.image} alt="" />
      </TB_RightUserImage>
      <TB_RightUserName>
          {user.display_name}
      </TB_RightUserName>
  </TB_RightUser>
)

const renderUserMenu =(item:any, index:any) => (
  <Link to='/' key={index}>
    <NotificationItem>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </NotificationItem>
  </Link>
)

export const TopBar = () => {
  return (
    <Container>
      <Search>
      </Search>
      <TopBarRight>
        <TopBarItem>
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item:any, index:any) => renderUserMenu(item, index)}
          />
        </TopBarItem>
        <TopBarItem>
            <Dropdown
              icon={<AiFillBell />}
              badge='3'
              contentData={notifications}
              renderItems={(item:any, index:any) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to='/'>View All</Link>}
            />
        </TopBarItem>
      </ TopBarRight>
    </Container>
  )
}
