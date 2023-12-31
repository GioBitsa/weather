import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getweatherdata(cityname: string) {
    this.http.get('https://open-weather-map27.p.rapidapi.com/weather');
  }
}
