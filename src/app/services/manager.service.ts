import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Group, TeamInfo } from '../models/group-model';
import { Match } from '../models/game-model';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';
import { pipeBind1 } from '../../../node_modules/@angular/core/src/render3/pipe';




@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private httpService: HttpService) { }


  public groupsStandingsList: Array<Group>;
  public gamesPlayOfflist: Array<Match>;
  loadGroupStageStandings() {
    this.httpService.requestData('v2/competitions/2000/standings').subscribe(
      data => { this.groupsStandingsList = this.createGroupsList(data.standings); },
      err => console.error(err));
  }

  loadPlayOffStageMatches() {
    this.httpService.requestData('v2/competitions/2000/matches?stage=ROUND_OF_16').subscribe(
      data => { this.gamesPlayOfflist = this.editGames(data.matches)},
      err => console.error(err));
  }

  createPlayOffMatchesList(data: Array<any>) {
    this.editGames(data);
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
      Groups.push({ name: this.editGroupName(group.group), teams: this.createTeamsGroupList(group.table) })
    });
    return Groups;
  }
  private editGroupName(name: string): string {
    return name.replace("_", " ");
  }
  private createTeamsGroupList(groupTeams: Array<any>): Array<TeamInfo> {
    return this.editTeam(groupTeams).sort((p1, p2) => {
      return p1.position - p2.position;
    });
  }

  private editGames(data: Array<any>): Array<Match> {
    let gamesArray: Array<Match> = [];
    data.forEach(
      match => {
        gamesArray.push({
          homeTeam: match.homeTeam.name,
          awayTeam: match.awayTeam.name,
          homeScore: match.score.fullTime.homeTeam,
          awayScore: match.score.fullTime.awayTeam,
          homePenalty: match.score.penalties.homeTeam,
          awayPenalty: match.score.penalties.awayTeam,
          date: match.utcDate
        });
      });
    return gamesArray.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }

  private editTeam(groupTeams: Array<any>): Array<TeamInfo> {
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
          goalsAgainst: team.goalsAgainst,
          lost: team.lost,
          playedGames: team.playedGames,
        });
      });
    return teamsGroupList;
  }
}
