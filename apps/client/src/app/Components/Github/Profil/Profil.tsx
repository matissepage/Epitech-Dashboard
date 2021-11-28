import { useState } from 'react';
import React from 'react';
import { GithubProfil } from './../../../../../../../shared/github.models';
import styled from 'styled-components';
import { getGithubProfil } from '../../../services/github/profil';
import { GiShadowFollower } from 'react-icons/gi';
import { GoRepo } from 'react-icons/go';
import { MdFollowTheSigns } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

export const GithubProfile = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [profil, setProfil] = useState<GithubProfil>()

  const getProfilData =  (): void => {
    if (name === '' || name === undefined || !name)
      return;
    getGithubProfil(name)
      .then(res => {
        setProfil(res);
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  return(
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault();
        getProfilData();
      }}>
        <label>
          <NameInput
            type="text"
            placeholder="github id"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <input type='submit' value='search' />
      </Form>
      <h1>Github Profil</h1>
      { profil !== undefined &&      
        <Content>
          <Header>
            <MyLink href={profil.html_url} target="_blank">
              <Logo src={profil?.avatar_url} alt="logo" />
            </MyLink>
            <Name>{profil?.name}</Name>
            <LoginName>{profil?.login}</LoginName>
            <Bio>{profil?.bio}</Bio>
            <Stats>
              <p>{React.createElement(GiShadowFollower)} {profil?.followers} followers  </p>
              <p>{React.createElement(MdFollowTheSigns)} {profil?.following} following </p>
              <p>{React.createElement(GoRepo)} {profil?.public_repos}</p>
            </Stats>
            { profil?.location && <p style={{marginTop: '15px'}} >{React.createElement(GrLocation)} {profil.location}</p>}
          </Header>
        </Content>
      }
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  width: 100%;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
`;

const NameInput = styled.input`
  width: 100px;
  height: 15px;
  border-color: transparent;
  border-radius: 5px;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const Name = styled.p`
  font-size: 26px;
  line-height: 1.25;
  font-weight: 600;
`

const LoginName = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #768390;
`

const Bio = styled.p`
  padding-top: 15px;
  font-size: 16px;
  text-align: center;
`

const Stats = styled.div`
  width: 100%;
  margin-top: 15px;
  text-align: center;
  color: #768390;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const MyLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
