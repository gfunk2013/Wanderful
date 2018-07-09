import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { PhotoData, PhotoEntity } from './photo_interfaces';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  venueUrl = 'https://api.foursquare.com/v2/venues/';
  venueId = '5b3ffdf89fb6b735f1eddc68';
  private oauthToken = '2RGVOSJ5VHXUESB2GAM2EB31CMIBFXX3CUYKJYR3P2TDFEI2';
  private versionDate = '20180613';

  private _photoUrl =
    '/photos?oauth_token=' +
    this.oauthToken +
    '&v=' +
    this.versionDate;

  constructor( private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getPhotoData(venueId: string): Observable<PhotoData> {
    return this._http.get<PhotoData>(this.venueUrl + venueId + this._photoUrl)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getPhotos(venueId: string): Observable<PhotoEntity[]> {
    return this.getPhotoData(venueId).map(
      (photoData: PhotoData) => photoData.response.photos.items
    );
  }
}
