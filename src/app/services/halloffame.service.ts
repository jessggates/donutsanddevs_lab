import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HallOfFameResponse } from '../interfaces/HallOfFameResponse';

@Injectable({
  providedIn: 'root'
})
export class HalloffameService {

  private hallOfFameUrl = 'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) { }

  getHallOfFamers(): Observable<HallOfFameResponse> {

    return this.http.get<HallOfFameResponse>(this.hallOfFameUrl);
  }
};
