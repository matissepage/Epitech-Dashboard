import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import Dashboard from './../../../assets/Form/spaceship.svg';
import Logo from './../../../assets/Form/spaceship.svg';
import styled from 'styled-components';
import { MenuList } from './DropMenu/MenuList'
import { AiOutlineClose } from 'react-icons/ai';
import { Submenu } from './DropMenu/DropMenu';
import {
  Container,
  ProfileImg,
  TitleText,
  SidebarWrap,
} from './styled'
import { ButtonLogin } from '../../Components/ButtonLogin/ButtonLogin';
import { useHistory } from 'react-router-dom';
import { redirectToSSo } from '../../services/auth/auth';
import { IconType } from 'react-icons/lib';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsSpotify, BsDiscord } from 'react-icons/bs';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGitlab,
  AiFillYoutube,
} from 'react-icons/ai';

const LoginOauthContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  padding-top : 600px;
  padding-left: 10px;
  position: absolute;
  flex-wrap: wrap;
  width: 90%;
`

interface LoginSSO {
  icon: IconType;
  url: string;
  name: string;
  path?: string;
  nameSvc: string;
}

const loginMap: LoginSSO[] = [
  {
    icon: FcGoogle,
    url: 'http://localhost:8080/auth/google',
    name: 'access_token_google',
    path: '/google',
    nameSvc: 'Google',
  },
  {
    icon: BsSpotify,
    url: 'http://localhost:8080/auth/spotify',
    name: 'access_token_spotify',
    path: '/spotify',
    nameSvc: 'Spotify',
  },
  {
    icon: AiFillGithub,
    url: 'http://localhost:8080/auth/github',
    name: 'access_token_github',
    path: '/github',
    nameSvc: 'Github',
  },
  {
    icon: AiFillLinkedin,
    url: 'http://localhost:8080/auth/linkedin',
    name: 'access_token_linkedin',
    path: '/linkedin',
    nameSvc: 'Linkedin',
  },
  {
    icon: AiFillGitlab,
    url: 'http://localhost:8080/auth/gitlab',
    name: 'access_token_gitlab',
    path: '/gitlab',
    nameSvc: 'Gitlab',
  },
  {
    icon: AiFillYoutube,
    url: 'http://localhost:8080/auth/youtube',
    name: 'access_token_youtube',
    path: '/youtube',
    nameSvc: 'Youtube',
  },
  {
    icon: BsDiscord,
    url: 'http://localhost:8080/auth/discord',
    name: 'access_token_discord',
    path: '/discord',
    nameSvc: 'Discord',
  },
];

export interface Services {
  title: string
  icon: IconType
  path: string
  log: boolean
}

const servicesAvailable: Services[] = [
  {
    title: 'Google',
    icon: BsSpotify,
    path: '/google',
    log: false,
  },
  {
    title: 'Github',
    icon: BsSpotify,
    path: '/github',
    log: false,
  },
  {
    title: 'Spotify',
    icon: BsSpotify,
    path: '/github',
    log: false,
  },
  {
    title: 'Trading',
    icon: BsSpotify,
    path: '/trading',
    log: false,
  },
]

export const SideBar = () => {
  const history = useHistory();
  const [service, setservice] = useState<Services[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}

  const isValid = (name: string): boolean => {
    if (localStorage.getItem(name)) {
      console.log('true');
      return true;
    }
    console.log(localStorage.getItem(name));
    return false;
  }

  const createServiceAvailable = (): void => {
    for (const login of loginMap) {
      if (localStorage.getItem(login.name) !== null) {
        setservice(service => [...service, {
          title: login.nameSvc,
          icon: login.icon,
          path: login.path,
          log: true,
        } as Services]);
      }
    }
  }

  useEffect(() => {
    createServiceAvailable();
  }, []);

  return (
    <div>
      <Container>
        <ProfileImg src={Dashboard} alt="Logo Dashboard"/>
        <TitleText>DASHBOARD</TitleText>
        <LoginOauthContainer>
          {loginMap.map((item, index) => {
            return (
              <ButtonLogin
                icon={item.icon}
                onClickCallback={() =>
                  redirectToSSo(
                    history,
                    item.url,
                    item.name,
                    item.path,
                    isValid
                  )
                }
              />
            );
          })}
        </LoginOauthContainer>
        <SidebarWrap>
          {service.map((item, index) => {
            return (
              <Submenu item={item} key={index} />
            );
          })}
        </SidebarWrap>
      </Container>
    </div>
  ); 
}
