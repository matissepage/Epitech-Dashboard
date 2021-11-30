import { DashBoardResponse } from './../../../../../../shared/DashboardResponse.model';
import { SpotifyArtist, SpotifyTrack } from './../../../../../../shared/spotify.model';
import axios from 'axios';

export const getSearchResult = (id: string, type: string): Promise<SpotifyArtist[]> => {
  return new Promise((resolve, reject) => {
    try {
      const token: string | null = localStorage.getItem('access_token_spotify');
      if (token === null || token === '')
        throw new Error('invalid token');
      axios.get<DashBoardResponse<SpotifyArtist[]>>(
        `http://localhost:8080/spotify/search/${id}/${type}/${token}`
      )
      .then((res) => {
        if (res.data.message === 'success' && res.data.statusCode === 200)
          resolve(res.data.response);
        else
          throw new Error(res.data.message);
      })
    } catch (error) {
      reject(error);
    }
  })
}

export const getTrackResult = (id: string): Promise<SpotifyTrack[]> => {
  return new Promise((resolve, reject) => {
    try {
      const token: string | null = localStorage.getItem('access_token_spotify');
      if (token === null || token === '')
        throw new Error('invalid token');
      axios.get<DashBoardResponse<SpotifyTrack[]>>(
        `http://localhost:8080/spotify/track/${id}/${token}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message === 'success' && res.data.statusCode === 200)
          resolve(res.data.response);
        else
          throw new Error(res.data.message);
      })
    } catch (error) {
      reject(error);
    }
  })
}
