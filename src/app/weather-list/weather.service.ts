import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { WeatherData, DayWithAstro} from './weather_interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherUrl = 'https://api.apixu.com/v1/forecast.json';
  private weatherKey = '7df1c3ea61824ccab76184348182003';
  city = 'new_york';
  days = '7';
  hour = '11';

  private fetchWeatherUrl = this.weatherUrl +
  '?key=' + this.weatherKey +
  '&q=' + this.city +
  '&days=' + this.days +
  '&hour=' + this.hour;

  constructor( private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getWeatherData(): Observable<WeatherData> {
    return this._http.get<WeatherData>(this.fetchWeatherUrl)
      // .do(data => console.log(data))
      .catch(this.handleError);
  }

  getWeatherDays(): Observable<DayWithAstro[]> {
    return this.getWeatherData().map(
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
