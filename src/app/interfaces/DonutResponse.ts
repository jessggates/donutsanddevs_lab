export interface DonutResponse {
    count: number;
    results: Donut[];
}

export interface Donut {
    id: number;
    ref: string;
    name: string;
    photo: string;
    photo_attribution: string;
}