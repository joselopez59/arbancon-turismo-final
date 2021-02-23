import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-footer-detail',
  templateUrl: './footer-detail.component.html',
  styleUrls: ['./footer-detail.component.scss'],
})
export class FooterDetailComponent implements OnInit {

  @Input() items: [];

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {}

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
}
