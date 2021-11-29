import { useEffect, useState } from 'react';
import { getFollows } from '../../../services/github/profil';
import { GithubFollower } from './../../../../../../../shared/github.models';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';

export const GithubFollowers = (): JSX.Element => {
  const [followers, setFollowers] = useState<GithubFollower[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('follower');

  const types: string[] = ['followers', 'followings'];

  const putRequest = (): void => {
    if (name === '' || type === '') return;
    getFollows(name, type)
      .then((res) => {
        setFollowers(res);
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
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          putRequest();
        }}
      >
        <label>
          <NameInput
            type="text"
            placeholder="github id"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <SelectMenu
            labelId="demo-simple-select-standard-label"
            value={type}
            onChange={(e) => {
              setType(e.target.value as string);
            }}
            label="Follower"
          >
            {types.map((type) => {
              return <MenuItem value={type}>{type}</MenuItem>;
            })}
          </SelectMenu>
        </label>
        <input type="submit" value="search" />
      </Form>
      <h1>Github Followers</h1>
      <Ul>
        {followers.map((follower, i) => {
          return (
            <MyLink href={follower.html_url} target="_blank">
              <Li key={`item_${i}`}>
                <p>{follower.login}</p>
                <img src={follower.avatar_url} alt="avatar" />
              </Li>
            </MyLink>
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
  margin: 10px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const MyLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SelectMenu = styled(Select)`
  width: 100px;
  height: 25px;
  color: white;
`;

const NameInput = styled.input`
  width: 100px;
  height: 15px;
  border-color: transparent;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
