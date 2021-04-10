import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team';
import { TeamService } from 'src/app/wrapper/services/team.service';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.scss']
})
export class Team2Component implements OnInit {
 teams: Team[];

  constructor(private teamService:TeamService) { }

   ngOnInit(): void {
    this.teamService.getTeamTwo().subscribe(team => this.teams = team);
  }

}
