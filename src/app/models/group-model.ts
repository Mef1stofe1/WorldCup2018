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
    goals: number = 0;
    points: number = 0;
}