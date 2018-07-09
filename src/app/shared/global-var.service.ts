import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {

  constructor() { }

  // Sensitive Variables



  // Global Variables

  private _city = 'new_york';

  set city(newCity: string) {
    this._city = newCity;
  }

  get city() {
    return this._city;
  }

  // Weather Variables

  get weatherKey() {
    return this._weatherKey;
  }

  get weatherVersion() {
    return this._weatherVersion;
  }

  // Venue Variables

  get venueClientId() {
    return this._venueClientId;
  }

  get venueClientSecret() {
    return this._venueClientSecret;
  }

  get venueVersionDate() {
    return this._venueVersionDate;
  }

}
