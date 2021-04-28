import { FlightInspirationListComponent } from './flight-inspiration-list/flight-inspiration-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightInspirationRoutingModule } from './flight-inspiration-routing.module';
import { FlightInspirationShellComponent } from './flight-inspiration-shell/flight-inspiration-shell.component';
import { FlightInspirationSearchComponent } from './flight-inspiration-search/flight-inspiration-search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FlightInspirationShellComponent,
    FlightInspirationListComponent,
    FlightInspirationSearchComponent,
  ],
  imports: [CommonModule, FlightInspirationRoutingModule, HttpClientModule],
})
export class FlightInspirationModule {}
