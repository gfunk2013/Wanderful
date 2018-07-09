import { Component, OnInit } from '@angular/core';

import { GlobalVarService } from '../shared/global-var.service';
import { Venue } from './venue_interfaces';
import { VenueService } from './venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  constructor(
    private _globalVarService: GlobalVarService,
    private _venueService: VenueService
  ) { }

  errorMessage: string;
  venueList: Venue[] = [];
  city = this._globalVarService.city;

  ngOnInit(): void {
    this._venueService.getVenuesAndPhotos(this._globalVarService.city)
    .subscribe(
      venue => {this.venueList.push(venue); console.log(venue); }
    );
    this._globalVarService.cityChanged.switchMap(
      newCity => {
        this.city = newCity;
        this.venueList = [];
        return this._venueService.getVenuesAndPhotos(newCity);
      }).subscribe(
        venue => {this.venueList.push(venue); console.log(venue); }
    );
  }

}
