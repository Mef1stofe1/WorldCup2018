export interface Group {
    name: string;
    teams: Array<TeamInfo>;
}

export class TeamInfo {
    name: string;
    id: number;
    position: number = 0;
    draw: number = 0;
    lost: number = 0;
    won: number = 0;
    playedGames: number = 0;
    goalsFor: number = 0;
    goalsAgainst: number = 0;
    points: number = 0;
}

export class TableHeaders {
    name: string;
    key: string;
}