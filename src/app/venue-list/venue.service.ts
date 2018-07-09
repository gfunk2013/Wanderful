import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { GlobalVarService } from '../shared/global-var.service';
import {Venue, VenueData} from './venue_interfaces';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(
    private _http: HttpClient,
    private _GlobalVarService: GlobalVarService) { }

  venueUrl = 'https://api.foursquare.com/v2/venues/';
  venueLimit = '8';

  private fetchVenueUrl = this.venueUrl +
    'explore?near=' + this._GlobalVarService.city +
    '&limit=' + this.venueLimit +
    '&client_id=' + this._GlobalVarService.venueClientId +
    '&client_secret=' + this._GlobalVarService.venueClientSecret +
    '&v=' + this._GlobalVarService.venueVersionDate;

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
        item => item.venue));
  }
}
