import { Component, Input, OnInit } from '@angular/core';
import { SearchResponse } from 'src/app/shared/models';

@Component({
  selector: 'fi-list',
  templateUrl: './flight-inspiration-list.component.html',
  styleUrls: ['./flight-inspiration-list.component.scss'],
})
export class FlightInspirationListComponent implements OnInit {
  @Input() results!: SearchResponse[] | null;
  constructor() {}

  ngOnInit(): void {}
}
