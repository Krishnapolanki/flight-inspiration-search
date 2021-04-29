import {
  ApiResponse,
  SearchResponse,
  SearchViewModel,
} from './../../../models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = `https://test.api.amadeus.com/v1/shopping/flight-destinations`;

@Injectable({ providedIn: 'root' })
export class FlightInspirationService {
  constructor(private http: HttpClient) {}

  getSearchResults(
    searchCriteria: SearchViewModel
  ): Observable<SearchResponse[]> {
    return this.http
      .get<ApiResponse>(`${URL}?origin=${searchCriteria.origin}`)
      .pipe(map((response: ApiResponse) => response.data));
  }
}
