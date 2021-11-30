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
    path: '/google',
    icon: <AiFillGoogleCircle />,
  },
  {
    title: 'Github',
    path: '/github',
    icon: <AiFillGithub />
  },
  {
    title: 'Spotify',
    path: '/spotify',
    icon: <BsSpotify />
  },
  {
    title: 'Trading',
    path: '/trading',
    icon: <FaMoneyCheckAlt />
  }
];