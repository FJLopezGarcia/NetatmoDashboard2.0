import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

/*
  Generated class for the NetatmoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable(
)

export class NetatmoProvider {

  url;
  access_token = '';
  device_id = '';
  module_id = '';
  scale = '1day';
  type = 'sum_boiler_on,sum_boiler_off';
  date_begin = '1512086400'; // Timestamp
  date_end = ''; // Timestamp
  optimize = false; // it shows the date
  real_time = true; // true: 00:00 False 12:00

  constructor(public http: Http) {
    console.log('Hello NetatmoProvider Provider');

    this.url = 'https://api.netatmo.com/api/getmeasure?' +
    'access_token=' + this.access_token + '&' +
    'device_id=' + this.device_id + '&' +
    'module_id=' + this.module_id + '&' +
    'scale=' + this.scale + '&' +
    'type=' + this.type + '&' +
    'date_begin=' + this.date_begin + '&' +
    // 'date_end=' + this.date_end + '&' +
    'optimize=' + this.optimize + '&' +
    'real_time=' + this.real_time;
  }

  getMeasure() {
    return this.http.get(this.url).pipe(map(res => res.json()));
  }

}
