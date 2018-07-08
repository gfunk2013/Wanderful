import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Venue, VenueData} from './venue_interfaces';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  venueUrl = 'https://api.foursquare.com/v2/venues/';
  city = 'New_York';
  venueLimit = '8';
  private clientId = '0SIPFS5IGTU5FQ4WJTFCI1NDXJTRY4NFPOQ3DJVFEPFINTNR';
  private clientSecret = '1GIMXCXI1ACNSPEXJH4RLXKYX4WDRSCVFYZYLEVTQJ2RN0XH';
  private versionDate = '20180320';
  private fetchVenueUrl =
    this.venueUrl +
    'explore?near=' + this.city +
    '&limit=' + this.venueLimit +
    '&client_id=' + this.clientId +
    '&client_secret=' + this.clientSecret +
    '&v=' + this.versionDate;

    constructor( private _http: HttpClient) { }

    private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
    }

    getVenueData(): Observable<VenueData> {
      return this._http.get<VenueData>(this.fetchVenueUrl)
        // .do(data => console.log(data))
        .catch(this.handleError);
    }

    getVenues(): Observable<Venue[]> {
      return this.getVenueData().map(
        (venueData: VenueData) => venueData.response.groups[0].items.map(
          item => item.venue
        ));
    }
}
