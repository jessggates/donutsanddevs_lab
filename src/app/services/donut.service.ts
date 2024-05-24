import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonutResponse } from '../interfaces/DonutResponse';


@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private apiUrl = 'https://grandcircusco.github.io/demo-apis/donuts.json';

  constructor(private http: HttpClient) {}

  getDonuts(): Observable<DonutResponse>{

    return this.http.get<DonutResponse>(this.apiUrl);
  }
}
