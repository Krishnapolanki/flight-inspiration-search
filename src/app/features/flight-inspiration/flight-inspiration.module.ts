import { FlightInspirationService } from './../../shared/services/api/flight-inspiration/flight-inspiration.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FlightInspirationListComponent } from './flight-inspiration-list/flight-inspiration-list.component';
import { FlightInspirationRoutingModule } from './flight-inspiration-routing.module';
import { FlightInspirationSearchComponent } from './flight-inspiration-search/flight-inspiration-search.component';
import { FlightInspirationShellComponent } from './flight-inspiration-shell/flight-inspiration-shell.component';

@NgModule({
  declarations: [
    FlightInspirationShellComponent,
    FlightInspirationListComponent,
    FlightInspirationSearchComponent,
  ],
  imports: [
    CommonModule,
    FlightInspirationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
})
export class FlightInspirationModule {}
