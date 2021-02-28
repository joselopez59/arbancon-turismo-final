import { Component, Input, OnInit } from '@angular/core';
import { TabChangeEventService } from '../tab-change-event.service';

@Component({
  selector: 'app-header-expandable',
  templateUrl: './header-expandable.component.html',
  styleUrls: ['./header-expandable.component.scss'],
})

export class HeaderExpandableComponent implements OnInit {

  @Input() headText: string;
  @Input() type: string;
  @Input() backButton: boolean;
  expanded = false;

  constructor(
    private events: TabChangeEventService
  ) {
      this.events.getObservable().subscribe(() => {
      console.log('Data received:');
      this.expanded = false;
    });
  }

  ngOnInit() {}

  expandHeader() {
    // console.log("expandHeader()");
    if (this.expanded) {
      this.expanded = false;
    } else {
      this.expanded = !this.expanded;
    }
  }

}
