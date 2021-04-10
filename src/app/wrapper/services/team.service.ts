import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/Operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from 'src/app/shared/model/team';
import { TEAMS } from 'src/app/shared/model/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]>{
    return of(TEAMS).pipe(delay(800));
    //return this.http.get<Team[]>(TEAMS);
  }

getTeamOne(): Observable<Team[]>{
  return of(TEAMS.filter(t => t.rank == 1))
} 


getTeamTwo(): Observable<Team[]>{
  return of(TEAMS.filter(t => t.rank == 2))
}


getTeamThree(): Observable<Team[]>{
  return of(TEAMS.filter(t => t.rank == 3))
}

}
