import { Component, OnInit } from '@angular/core';
import { LtoPublicNodeService, BlockHeader } from '@app/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lastBlocksHeaders$: Observable<BlockHeader[]>;
  visibleColumns$: Observable<string[]> = of(['height', 'generator', 'size', 'transactionsCount']);

  constructor(private _publicNode: LtoPublicNodeService) {
    this.lastBlocksHeaders$ = this._publicNode
      .blocksHeight()
      .pipe(switchMap(height => this._publicNode.blockHeaders(height, 20)));
  }

  ngOnInit() {}
}
