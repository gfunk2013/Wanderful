import { Component, OnInit } from '@angular/core';

import { GlobalVarService } from '../shared/global-var.service';
import { CityNamePipe } from '../shared/city-name.pipe';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _globalVariableService: GlobalVarService,
    private _cityNamePipe: CityNamePipe) { }

  isNavbarCollapsed = true;

  _newCity: string;

  get newCity() {
    return this._newCity;
  }

  set newCity(newValue: string) {
    this._newCity = newValue;
  }

  submitCity() {
    this._globalVariableService.city =
      this._cityNamePipe.transform(this.newCity).replace(' ', '_');
  }

  ngOnInit() {
  }

}
