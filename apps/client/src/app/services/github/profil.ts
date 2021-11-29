import {
  GithubFollower,
  GithubProfil,
  GithubRepo,
} from './../../../../../../shared/github.models';
import { DashBoardResponse } from './../../../../../../shared/DashboardResponse.model';
import axios from 'axios';

export const getFollows = async (
  id: string,
  type: string
): Promise<GithubFollower[]> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get<DashBoardResponse<GithubFollower[]>>(
          `http://localhost:8080/github/user/${id}/${type}`
        )
        .then((response) => {
          if (response.data.statusCode !== 200) {
            throw new Error(response.data.message);
          }
          resolve(response.data.response);
        })
        .catch((err) => console.error(err));
    } catch (err) {
      reject(err);
    }
  });
};

export const getRepositorys = async (id: string): Promise<GithubRepo[]> => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get<DashBoardResponse<GithubRepo[]>>(
          `http://localhost:8080/github/user/${id}/repos`
        )
        .then((response) => {
          if (response.data.statusCode !== 200)
            throw new Error(response.data.message);
          resolve(response.data.response);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
};

export const getGithubProfil = async (id: string): Promise<GithubProfil> => {
  return new Promise((resolve, reject) => {
    if (id === ' ' || !id) reject(new Error('bad id'));
    axios
      .get<DashBoardResponse<GithubProfil>>(
        `http://localhost:8080/github/user/${id}`
      )
      .then((res) => {
        if (res.data.statusCode !== 200) {
          reject(new Error(res.data.message));
        }
        resolve(res.data.response);
      })
      .catch((err) => reject(err));
  });
};
