import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {

  constructor() { }

  // Sensitive Variables

  private _weatherKey = '7df1c3ea61824ccab76184348182003';
  private _venueClientId = '0SIPFS5IGTU5FQ4WJTFCI1NDXJTRY4NFPOQ3DJVFEPFINTNR';
  private _venueClientSecret = '1GIMXCXI1ACNSPEXJH4RLXKYX4WDRSCVFYZYLEVTQJ2RN0XH';
  private _venueVersionDate = '20180320';

  // Global Variables

  private _city = 'new_york';

  get city() {
    return this._city;
  }

  cityChanged: EventEmitter<string> = new EventEmitter();

  set city(newCity: string) {
    this._city = newCity;
    this.cityChanged.emit(this.city);
  }

  // Weather Variables

  get weatherKey() {
    return this._weatherKey;
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
