export interface IRoster {
    copyright: string;
    roster: [IPlayer];
    link: string;
}

export interface IPlayer {
    person: IPerson;
    jerseyNumber: string;
    position: IPosition;
}

export interface IPerson {
    id: number;
    fullName: string;
    link: string;
}

export interface IPosition {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
}
