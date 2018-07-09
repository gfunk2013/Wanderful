import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';

import { GlobalVarService } from '../shared/global-var.service';
import { PhotoService } from './photo.service';
import {Venue, VenueData} from './venue_interfaces';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(
    private _http: HttpClient,
    private _GlobalVarService: GlobalVarService,
    private _photoService: PhotoService) { }

  venueUrlPrefix = 'https://api.foursquare.com/v2/venues/';
  venueLimit = '8';

  private venueUrlSuffix =
    '&limit=' + this.venueLimit +
    '&client_id=' + this._GlobalVarService.venueClientId +
    '&client_secret=' + this._GlobalVarService.venueClientSecret +
    '&v=' + this._GlobalVarService.venueVersionDate;

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getVenueData(city): Observable<VenueData> {
    return this._http.get<VenueData>(this.venueUrlPrefix
      + 'explore?near=' + city + this.venueUrlSuffix)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getVenues(city): Observable<Venue[]> {
    return this.getVenueData(city).map(
      (venueData: VenueData) => venueData.response.groups[0].items.map(
        item => item.venue));
  }

  getVenuesAndPhotos(city): Observable<Venue> {
    return this.getVenues(city).switchMap(
      venueArray => Observable.from(venueArray)
    ).mergeMap(
      venue => {
        return this._photoService.getPhotos(venue.id).map(
          photoArray => {
            venue.photoArray = photoArray;
            return venue;
          }
        );
      }
    );
  }
}
