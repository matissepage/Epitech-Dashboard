import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillGoogleCircle,
  AiFillGithub,
} from 'react-icons/ai';
import {  BsSpotify } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';
import { MenuItem } from './DropMenu';

export const MenuList: MenuItem[] = [
  {
    title: 'Google',
    path: '/home',
    icon: <AiFillGoogleCircle />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
    subnav: [
      {
        title: 'Widget1',
        // This aim is to have a drag an drop and not a route redirect
        path: '/google/widget1',
        icon: <MdWidgets />
      },
      {
        title: 'Widget2',
        path: '/google/widget2',
        icon: <MdWidgets />
      }
    ]
  },
  {
    title: 'Github',
    path: '/home',
    icon: <AiFillGithub />
  },
  {
    title: 'Spotify',
    path: '/home',
    icon: <BsSpotify />
  },
  {
    title: 'Trading',
    path: '/home',
    icon: <FaMoneyCheckAlt />
  }
];