import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { DashBoardResponse } from './../../../../shared/DashboardResponse.model';
import {
  GithubFollower,
  GithubProfil,
} from './../../../../shared/github.models';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('/followers/:id')
  getFollowers(
    @Param('id') param: string
  ): Observable<DashBoardResponse<GithubFollower[]>> {
    return this.githubService.getFollowers(param);
  }

  @Get('/user/:id')
  getProfil(
    @Param('id') id: string
  ): Observable<DashBoardResponse<GithubProfil>> {
    return this.githubService.getProfil(id);
  }
}
