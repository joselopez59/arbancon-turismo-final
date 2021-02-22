import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

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
