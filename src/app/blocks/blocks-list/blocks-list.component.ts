import { Component, OnInit } from '@angular/core';
import { LtoPublicNodeService, BlockHeader } from '@app/core';
import { switchMap, exhaustMap, shareReplay, take, startWith, scan } from 'rxjs/operators';
import { Subject, merge, Observable, of, fromEvent } from 'rxjs';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit {
  loadMore$ = new Subject<any>();
  height$ = new Subject<number>();
  blocks$: Observable<BlockHeader[]>;
  visibleColumns$: Observable<string[]> = of(['height', 'generator', 'size', 'transactionsCount']);

  constructor(
    private _publicNode: LtoPublicNodeService,
    private _scrollDispatcher: ScrollDispatcher
  ) {
    const height$ = merge(_publicNode.blocksHeight(), this.height$).pipe(shareReplay(1));

    this.blocks$ = this.loadMore$.pipe(
      startWith(0),
      exhaustMap(() => {
        return height$.pipe(
          take(1),
          switchMap(height => {
            this.height$.next(height - 99);
            return _publicNode.blockHeaders(height, 99);
          })
        );
      }),
      scan((blocks, newBlocks) => {
        return [...blocks, ...newBlocks];
      })
    );

    fromEvent(window, 'scroll').subscribe(evt => {
      console.log(document.documentElement.scrollTop);
    });
  }

  ngOnInit() {}

  more() {
    this.loadMore$.next();
  }
}
