import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  GithubFollower,
  GithubProfil,
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
            code: res.data !== [] ? 200 : 400,
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
              code: 400,
              message: 'Possible bad id',
              response: res.data,
            };
            return response;
          } else {
            const response: DashBoardResponse<GithubProfil> = {
              code: 200,
              message: 'success',
              response: res.data,
            };
            return response;
          }
        })
      );
  }

  // async getFollowers(id: string): Promise<DashBoardResponse> {
  //   this.followers = await (await this.httpService.get<GithubFollower[]>(`https://api.github.com/users/${id}/followers`).toPromise()).data
  //   return new Promise((resolve, reject: (reason?: DashBoardResponse) => void) => {
  //     if (this.followers !== []) {
  //       resolve({
  //         code: 200,
  //         message: 'success',
  //         response: this.followers
  //       });
  //     } else {
  //       reject({
  //         code: 400,
  //         message: 'Possible bad id',
  //         response: []
  //       })
  //     }
  //   })
  // }
}
