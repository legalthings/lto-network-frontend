import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card-content',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./data-card-content.component.scss']
})
export class DataCardContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
