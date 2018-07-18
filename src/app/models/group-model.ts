export interface iTeam {
    constructor(name: string, id: number)
}

export class Group {
    name: string;
    position: number = 0;
    draw: number = 0;
    lost: number = 0;
    won: number = 0;
    playedGames: number = 0;
    goals: number = 0;
    points: number = 0;
    team?: iTeam;
}