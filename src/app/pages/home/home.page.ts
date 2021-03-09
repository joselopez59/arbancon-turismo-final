import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { WheaterService } from './wheater.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  temp: any;
  iconUrl: any;

  constructor(
    private wheaterService: WheaterService,
    private inAppBrowser: InAppBrowser,
  ) { }

  ngOnInit() {
    this.getWheater();
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  getWheater() {
    this.wheaterService.getWheater()
      // tslint:disable-next-line: deprecation
      .subscribe(response => {
        this.temp = Math.round(parseFloat(response.main.temp)) + '°';
        this.iconUrl = 'https://openweathermap.org/img/w/' + response.weather[0].icon + '.png';
    });
  }
}
