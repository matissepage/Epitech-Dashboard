import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const LoginSucess = () => {
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const token = query.toString();
  const jwt = token.split('&')[0].slice(token.split('&')[0].indexOf('=') + 1);
  const provider = token
    .split('&')[1]
    .slice(token.split('&')[1].indexOf('=') + 1);
  localStorage.setItem('access_token_' + provider, jwt);
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 500);
  }, []);
  return <div>Thanks for logging in!</div>;
};
