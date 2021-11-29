import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { SpotifyArtist } from 'shared/spotify.model';
import styled from 'styled-components';
import { getSearchResult } from '../../../services/spotify/spotify';
import logo from '../../../../assets/Profile/man.png';

export const SpotifySearch = (): JSX.Element => {
  const [artists, setArtists] = useState<SpotifyArtist[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('artist');


  const getSearch = (): void => {
    getSearchResult(name, type)
      .then((res) => {
        setArtists(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getSearch();
        }}
      >
        <label>
          <NameInput
            type="text"
            placeholder="search"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <input type="submit" value="search" />
      </Form>
      <h1>Github Followers</h1>
      <Ul>
        {artists.map((artist, i) => {
          return (
            <MyLink href={artist.uri} target="_blank">
              <Li key={i}>
                <p>{artist.name}</p>
                <img
                  src={artist.images?.length > 0 ? artist.images[0].url : logo}
                  alt="avatar"
                />
              </Li>
            </MyLink>
          );
        })}
      </Ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
