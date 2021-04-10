import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/model/team';
import { TeamService } from 'src/app/wrapper/services/team.service';

@Component({
  selector: 'app-team3',
  templateUrl: './team3.component.html',
  styleUrls: ['./team3.component.scss']
})
export class Team3Component implements OnInit {

 teams: Team[];

  constructor(private teamService:TeamService) { }

   ngOnInit(): void {
    this.teamService.getTeamThree().subscribe(team => this.teams = team);
  }

}
