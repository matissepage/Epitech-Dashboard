import { useEffect, useState } from 'react';
import { getFollows } from '../../../services/github/profil';
import { GithubFollower } from './../../../../../../../shared/github.models'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GithubFollowers = (): JSX.Element => {
  const [followers, setFollowers] = useState<GithubFollower[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFollows('clementbolin', 'followers')
      .then(res => {
        setFollowers(res);
        setLoading(false);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
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
          )
        })}
      </Ul>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px;
`

const Ul = styled.ul`
  overflow-y: scroll;
  height: 300px;
  margin: 10px;
`

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
`
const MyLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`