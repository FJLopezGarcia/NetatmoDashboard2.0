import { Component, OnInit } from '@angular/core';
import { NetatmoProvider } from '../services/netatmo.service';

@Component({
  selector: 'app-netatmo',
  templateUrl: 'netatmo.page.html',
  styleUrls: ['netatmo.page.scss'],
})

export class NetatmoPage implements OnInit {
  constructor(
    private netatmoProvider: NetatmoProvider
    ) {}

  ngOnInit() {
    this.netatmoProvider.getMeasure().subscribe(
      netatmomesure => {
        console.log(netatmomesure);
        const result: any = [] = [];

        Object.keys(netatmomesure.body).forEach(key => {
          result.push({
            date: key,
            boiler_on: Math.round((netatmomesure.body[key][0] / 3600) * 100) / 100,
            boiler_off: Math.round((netatmomesure.body[key][1] / 3600) * 100) / 100,
            total: Math.round((netatmomesure.body[key][0] / 3600) + (netatmomesure.body[key][1] / 3600))
          });
        });
        console.log (result);
        // Displaying JSON data in Chartjs
        // https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs
      }
    );
  }

}
