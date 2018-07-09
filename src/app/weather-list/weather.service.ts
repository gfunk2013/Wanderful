import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { GlobalVarService } from '../shared/global-var.service';
import { WeatherData, DayWithAstro} from './weather_interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private _http: HttpClient,
    private _globalVarService: GlobalVarService) { }

  private weatherUrlPrefix = 'https://api.apixu.com/v1/forecast.json?key=' + this._globalVarService.weatherKey;

  private weatherUrlSuffix = '&days=7&hour=11';

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getWeatherData(city): Observable<WeatherData> {
    return this._http.get<WeatherData>( this.weatherUrlPrefix + '&q=' + city + this.weatherUrlSuffix)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getWeatherDays(city): Observable<DayWithAstro[]> {
    return this.getWeatherData(city).map(
      (weatherData: WeatherData) => weatherData.forecast.forecastday.map(
        dayEntity => {
          const dayWithAstro: DayWithAstro = {date: dayEntity.date,
                                               ...dayEntity.day,
                                               ...dayEntity.astro};
          return dayWithAstro;
        }
      )
    );
  }
}
