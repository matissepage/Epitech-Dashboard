import { useEffect, useState } from 'react';
import { getRepositorys } from '../../../services/github/profil';
import { GithubRepo } from './../../../../../../../shared/github.models';
import styled from 'styled-components';
import randomColor from "randomcolor";

export const GithubRepositorys = (): JSX.Element => {
  const [repositorys, setRepositorys] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>('');

  const putRequest = (): void => {
    if (name === '')
      return;
    getRepositorys(name)
      .then((res) => {
        setRepositorys(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    putRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Form onSubmit={(e) => {
        e.preventDefault();
        putRequest();
      }}>
        <label>
          <NameInput
            type="text"
            placeholder="github id"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type='submit' value='search' />
      </Form>
      <h1>Github Repositorys</h1>
      <Ul>
        {repositorys.map((repo, i) => {
          return (
            <Li key={`item_${i}`}>
              <About>
                <MyLink href={repo.html_url} target="_blank">
                  <Title>{repo.name}</Title>
                </MyLink>
                <Description>{repo.description}</Description>
                <Logo>
                  <Language>{repo.language}</Language>
                </Logo>
              </About>
              <MyLink href={repo.owner.html_url} target="_blank">
                <img src={repo.owner.avatar_url} alt="avatar" />
              </MyLink>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
`;

const Ul = styled.ul`
  overflow-y: scroll;
  height: 300px;
  width: 100%;
  margin: 10px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: 600;
`

const Description = styled.p`
  margin-bottom: 20px;
  color: #768390 !important;
  word-wrap: break-word;
`

const Logo = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${() => randomColor()};
  border-radius: 50%;
  margin-bottom: 15px;
  margin-left: 10px;
  display: flex;
  align-items: center;

`

const Language = styled.p`
  margin-left: 20px;
  text-align: center;
  background-color: transparent;
`

const MyLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
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
