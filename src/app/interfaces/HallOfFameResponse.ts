export interface HallOfFameResponse {
    complete: FamousPerson[];
}

export interface FamousPerson {
firstName: string;
lastName: string;
innovation: string;
year: number;
}