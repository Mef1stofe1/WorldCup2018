import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Group, TeamInfo } from '../models/group-model';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';
import { pipeBind1 } from '../../../node_modules/@angular/core/src/render3/pipe';




@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private httpService: HttpService) { }


  public groupsStandingsList: Array<Group>;
  loadGroupStageStandings() {
    this.httpService.requestData('v2/competitions/2000/standings').subscribe(
      data => { this.groupsStandingsList = this.createGroupsList(data.standings); },
      err => console.error(err));
  }

  formGroupTableHeaders(): string[] {
    return ["Team", "Points", "Played Games", "Won", "Lost", "Draw", "Scored Goals", "Missed Goals"];
  }

  createGroupsList(data: Array<any>): Array<Group> {
    return this.generateListOfGroups(data.filter(group => group.type === 'TOTAL'));
  }

  generateListOfGroups(listOfGroups: Array<any>): Array<Group> {
    let Groups: Array<Group> = [];
    listOfGroups.forEach(group => {
      Groups.push({ name: group.group, teams: this.createTeamsGroupList(group.table) })
    });
    return Groups;
  }

  createTeamsGroupList(groupTeams: Array<any>): Array<TeamInfo> {
    let teamsGroupList: Array<TeamInfo> = [];
    groupTeams.map(
      team => {
        teamsGroupList.push({
          name: team.team.name,
          id: team.team.id,
          draw: team.draw,
          position: team.position,
          points: team.points,
          won: team.won,
          goalsFor: team.goalsFor,
          goalsAgainst : team.goalsAgainst,
          lost: team.lost,
          playedGames: team.playedGames,
        });
      }, console.log(teamsGroupList)
    );
    return teamsGroupList.sort((p1, p2) => {
      return p1.position - p2.position;
    });
  }
}
