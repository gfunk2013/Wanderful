import { Component, OnInit } from '@angular/core';

import { DayWithAstro } from './weather_interfaces';
import { WeatherService } from './weather.service';
import { GlobalVarService } from '../shared/global-var.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  constructor(
    private _globalVarService: GlobalVarService,
    private _weatherService: WeatherService
  ) { }

  dayList: DayWithAstro[];
  errorMessage: string;
  city = this._globalVarService.city;

  ngOnInit(): void {
    this._weatherService.getWeatherDays(this._globalVarService.city).subscribe(
      dayArray => this.dayList = dayArray
    );
    this._globalVarService.cityChanged.switchMap(
      newCity => {
        this.city = newCity;
        return this._weatherService.getWeatherDays(newCity);
      }).subscribe(
      dayArray => this.dayList = dayArray
    );
  }

}
