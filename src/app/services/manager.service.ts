import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Group, TeamInfo } from '../models/group-model';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';




@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private httpService: HttpService) { }



  loadCupStandings() {
    const uri = 'v2/competitions/2000/standings';
    let result = this.httpService.requestData(uri).subscribe(
      data => { this.createGroupsList(data.standings); },
      err => console.error(err)
    );
  }


  createGroupsList(data: Array<any>) {
    let Groups: Array<Group> = [];
    let listOfGroups = data.filter(group => group.type === 'TOTAL');
    listOfGroups.forEach(group => {
      Groups.push({ name: group.group, teams: this.createTeamsGroupList(group.table) })
    });
    console.log('New array', Groups);
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
          goals: team.goals,
          lost: team.lost,
          playedGames: team.playedGames
        });
      }, console.log(teamsGroupList)
    );
    return teamsGroupList;
  }
}
