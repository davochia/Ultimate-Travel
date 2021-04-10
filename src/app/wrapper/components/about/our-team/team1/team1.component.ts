import { TeamService } from './../../../../services/team.service';
import { Team } from './../../../../../shared/team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team1',
  templateUrl: './team1.component.html',
  styleUrls: ['./team1.component.scss']
})
export class Team1Component implements OnInit {

  teams: Team[];

  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeamOne().subscribe(team => this.teams = team);
  }

}
