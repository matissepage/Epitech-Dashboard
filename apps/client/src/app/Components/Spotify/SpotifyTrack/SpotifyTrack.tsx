import { useState } from 'react';
import { Select } from '@mui/material';
import { SpotifyTrack } from 'shared/spotify.model';
import styled from 'styled-components';
import { getTrackResult } from '../../../services/spotify/spotify';
import logo from '../../../../assets/Profile/man.png';

export const SpotifyTrackWidget = (): JSX.Element => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string>('');

  const getTracks = (): void => {
    getTrackResult(name)
      .then((res) => {
        setTracks(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          getTracks();
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
      <Ul>
        {tracks.map((track, i) => {
          return (
            <Li key={i}>
              <MyLink href={track.external_urls.spotify} target="_blank">
                <p>{track.name}</p>
                <Describe>
                  {track.artists.map((artist, i) => {
                    return (
                      <ItemDescribe key={i}>
                        <p>{artist.name}</p>
                      </ItemDescribe>
                    )
                  })}
                </Describe>
              </MyLink>
              <MyLink href={track.album.external_urls.spotify} target="_blank">
                <img
                  src={
                    track.album.images.length > 0
                      ? track.album.images[0].url
                      : logo
                  }
                  alt="avatar"
                />
              </MyLink>
            </Li>
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

const Describe = styled.div`
  display: flex;
  flex-direction: row;
`

const ItemDescribe = styled.li`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(243, 242, 242, 0.15);
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
