import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  GithubFollower,
  GithubProfil,
  GithubRepo,
} from './../../../../shared/github.models';
import { DashBoardResponse } from './../../../../shared/DashboardResponse.model';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  getFollowers(id: string): Observable<DashBoardResponse<GithubFollower[]>> {
    return this.httpService
      .get<GithubFollower[]>(`https://api.github.com/users/${id}/followers`)
      .pipe(
        map((res) => {
          const response: DashBoardResponse<GithubFollower[]> = {
            statusCode: res.data !== [] ? 200 : 400,
            message: res.data !== [] ? 'success' : 'Possible bad id',
            response: res.data,
          };
          return response;
        })
      );
  }

  getFollowings(id: string): Observable<DashBoardResponse<GithubFollower[]>> {
    return this.httpService
      .get<GithubFollower[]>(`https://api.github.com/users/${id}/following`)
      .pipe(
        map((res) => {
          const response: DashBoardResponse<GithubFollower[]> = {
            statusCode: res.data !== [] ? 200 : 400,
            message: res.data !== [] ? 'success' : 'Possible bad id',
            response: res.data,
          };
          return response;
        })
      );
  }

  getProfil(id: string): Observable<DashBoardResponse<GithubProfil>> {
    return this.httpService
      .get<GithubProfil>(`https://api.github.com/users/${id}`)
      .pipe(
        map((res) => {
          if (res.data.login === undefined) {
            const response: DashBoardResponse<GithubProfil> = {
              statusCode: 400,
              message: 'Possible bad id',
              response: res.data,
            };
            return response;
          } else {
            const response: DashBoardResponse<GithubProfil> = {
              statusCode: 200,
              message: 'success',
              response: res.data,
            };
            return response;
          }
        })
      );
  }

  getUserRepos(id: string): Observable<DashBoardResponse<GithubRepo[]>> {
    return this.httpService
      .get<GithubRepo[]>(`https://api.github.com/users/${id}/repos`)
      .pipe(
        map((res) => {
          if (res.data === []) {
            const response: DashBoardResponse<GithubRepo[]> = {
              statusCode: 400,
              message: 'Possible bad id',
              response: [],
            };
            return response;
          } else {
            const response: DashBoardResponse<GithubRepo[]> = {
              statusCode: 200,
              message: 'success',
              response: res.data,
            };
            return response;
          }
        })
      );
  }

  getSearchRepo(
    id: string,
    repoName: string
  ): Observable<DashBoardResponse<GithubRepo>> {
    return this.httpService
      .get<GithubRepo>(`https://api.github.com/repos/${id}/${repoName}`)
      .pipe(
        map((res) => {
          if (res === undefined) {
            const response: DashBoardResponse<GithubRepo> = {
              statusCode: 400,
              message: 'Possible by id or wrong repository name',
              response: {} as GithubRepo,
            };
            return response;
          } else {
            const response: DashBoardResponse<GithubRepo> = {
              statusCode: 200,
              message: 'success',
              response: res.data,
            };
            return response;
          }
        })
      );
  }
}
