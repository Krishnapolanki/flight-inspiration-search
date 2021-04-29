import {
  SearchViewModel,
  ViewType,
} from './../../../shared/models/search.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fi-search',
  templateUrl: './flight-inspiration-search.component.html',
  styleUrls: ['./flight-inspiration-search.component.scss'],
})
export class FlightInspirationSearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<SearchViewModel>();

  form: FormGroup;
  viewTypes = Object.values(ViewType);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      origin: ['MAD', Validators.required],
      departureDate: ['010521'],
      oneWay: [false],
      duration: ['100'],
      nonStop: [false],
      maxPrice: [0],
      viewBy: [],
    });
  }

  ngOnInit(): void {}
  search() {
    if (this.form.valid) {
      this.onSearch.emit(this.form.value);
    }
  }
}
