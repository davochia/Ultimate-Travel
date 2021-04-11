import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Team } from 'src/app/shared/model/team';
import { TEAMS } from 'src/app/shared/model/teams';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor() {}

  getTeams(): Observable<Team[]> {
    return of(TEAMS).pipe(delay(800));
    //return this.http.get<Team[]>(TEAMS);
  }

  getTeamOne(): Observable<Team[]> {
    return of(TEAMS.filter((t) => t.rank == 1));
  }

  getTeamTwo(): Observable<Team[]> {
    return of(TEAMS.filter((t) => t.rank == 2));
  }

  getTeamThree(): Observable<Team[]> {
    return of(TEAMS.filter((t) => t.rank == 3));
  }
}
