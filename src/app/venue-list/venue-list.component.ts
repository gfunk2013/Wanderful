import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/switchMap';

import { Venue } from './venue_interfaces';
import { VenueService } from './venue.service';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  errorMessage: string;
  venueList: Venue[] = [];

  constructor(private _venueService: VenueService,
              private _photoService: PhotoService) { }

  ngOnInit(): void {
    this._venueService.getVenues().switchMap(
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
    ).subscribe(
      venue => {this.venueList.push(venue); console.log(this.venueList); }
    );

  }

}
