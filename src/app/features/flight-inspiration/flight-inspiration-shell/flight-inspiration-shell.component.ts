import { FlightInspirationService } from './../../../shared/services/api/flight-inspiration/flight-inspiration.service';
import { SearchViewModel } from './../../../shared/models/search.model';
import { AuthService } from './../../../shared/services/api/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from 'src/app/shared/models';

@Component({
  selector: 'fi-shell',
  templateUrl: './flight-inspiration-shell.component.html',
  styleUrls: ['./flight-inspiration-shell.component.scss'],
})
export class FlightInspirationShellComponent implements OnInit {
  searchResults$!: Observable<SearchResponse[]>;

  constructor(private flightInspirationService: FlightInspirationService) {}

  ngOnInit(): void {}
  getResults(searchCriteria: SearchViewModel) {
    this.searchResults$ = this.flightInspirationService.getSearchResults(
      searchCriteria
    );
  }
}
