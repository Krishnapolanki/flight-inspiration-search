import { ApiResponse, SearchResponse } from './../../../models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = `https://test.api.amadeus.com/v1/shopping/flight-destinations`;

@Injectable({ providedIn: 'root' })
export class FlightInspirationService {
  constructor(private http: HttpClient) {}

  getSearchResults(origin: string): Observable<SearchResponse[]> {
    return this.http
      .get<ApiResponse>(`${URL}?origin=${origin}`)
      .pipe(map((response: ApiResponse) => response.data));
  }
}
