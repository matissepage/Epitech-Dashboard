import { GithubFollower, GithubRepo } from './../../../../../../shared/github.models';
import { DashBoardResponse } from './../../../../../../shared/DashboardResponse.model';
import axios from 'axios';

export const getFollows = async (id: string, type: string): Promise<GithubFollower[]> => {
  return new Promise((resolve, reject) => {
    try {
      axios.get<DashBoardResponse<GithubFollower[]>>(`http://localhost:8080/github/user/${id}/${type}`)
        .then((response) => {
          if (response.data.statusCode !== 200) {
            throw new Error(response.data.message);
          }
          resolve(response.data.response);
        })
        .catch(err => console.error(err))
    } catch (err) {
      reject(err)
    }
  })
}

export const getRepositorys = async (id: string): Promise<GithubRepo[]> => {
  return new Promise((resolve, reject) => {
    axios.get<DashBoardResponse<GithubRepo[]>>(`http://localhost:8080/github/user/${id}/repos`)
      .then((response) => {
        if (response.data.statusCode !== 200)
          throw new Error(response.data.message);
        resolve(response.data.response);
      })
      .catch(err => console.error(err))
  })
}
