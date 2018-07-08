import { Component, OnInit } from '@angular/core';
import { SimpleGlobal } from '../../../node_modules/ng2-simple-global';

import { DayWithAstro } from './weather_interfaces';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  dayList: DayWithAstro[];
  errorMessage: string;

  constructor(
    private sg: SimpleGlobal,
    private _weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this._weatherService.getWeatherDays().subscribe(
      dayArray => this.dayList = dayArray
    );
  }

}
