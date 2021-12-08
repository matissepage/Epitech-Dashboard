import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { DashBoardResponse } from './../../../../shared/DashboardResponse.model';
import {
  GithubFollower,
  GithubProfil,
  GithubRepo,
} from './../../../../shared/github.models';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('/user/:id/followers/:token')
  getFollowers(
    @Param('id') param: string,
    @Param('token') token: string
  ): Observable<DashBoardResponse<GithubFollower[]>> {
    return this.githubService.getFollowers(param, token);
  }

  @Get('/user/:id/followings/:token')
  getFollowings(
    @Param('id') param: string,
    @Param('token') token: string
  ): Observable<DashBoardResponse<GithubFollower[]>> {
    return this.githubService.getFollowings(param, token);
  }

  @Get('/user/:id/:token')
  getProfil(
    @Param('id') id: string,
    @Param('token') token: string
  ): Observable<DashBoardResponse<GithubProfil>> {
    return this.githubService.getProfil(id, token);
  }

  @Get('/user/:id/repos/:token')
  getUserRepos(
    @Param('id') id: string,
    @Param('token') token: string
  ): Observable<DashBoardResponse<GithubRepo[]>> {
    return this.githubService.getUserRepos(id, token);
  }

  @Get('/user/:id/:repoName/:token')
  getSpecificRepo(
    @Param('id') id: string,
    @Param('repoName') name: string,
    @Param('token') token: string
  ): Observable<DashBoardResponse<GithubRepo>> {
    return this.githubService.getSearchRepo(id, name, token);
  }
}
