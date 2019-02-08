import { Component, OnInit } from '@angular/core';
import { LtoPublicNodeService, BlockHeader } from '@app/core';
import { Observable, of, timer } from 'rxjs';
import { switchMap, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-last-blocks',
  templateUrl: './last-blocks.component.html',
  styleUrls: ['./last-blocks.component.scss']
})
export class LastBlocksComponent implements OnInit {
  lastBlocksHeaders$: Observable<BlockHeader[]>;
  visibleColumns$: Observable<string[]> = of(['height', 'generator', 'size', 'transactionsCount']);

  constructor(private _publicNode: LtoPublicNodeService) {
    this.lastBlocksHeaders$ = timer(0, 5000).pipe(
      switchMapTo(_publicNode.blocksHeight()),
      switchMap(height => _publicNode.blockHeaders(height, 20))
    );
  }

  ngOnInit() {}
}
