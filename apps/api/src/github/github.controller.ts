import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';
import { Observable } from 'rxjs';
import { DashBoardResponse } from './../../../../shared/DashboardResponse.model';

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('/followers/:id')
  getFollowers(@Param('id') param: string): Observable<DashBoardResponse> {
    return this.githubService.getFollowers(param);
  }
  // @Get('/followers/:id')
  // getFollowers(@Param('id') param: string): Promise<DashBoardResponse> {
  //   return this.githubService.getFollowers(param);
  // }
}
