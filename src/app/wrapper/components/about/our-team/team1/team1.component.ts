import { TeamService } from './../../../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/model/team';

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
