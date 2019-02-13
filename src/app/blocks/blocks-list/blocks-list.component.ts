import { Component, OnInit } from '@angular/core';
import { LtoPublicNodeService, BlockHeader, ScreenService, ScreenSize } from '@app/core';
import { switchMap, exhaustMap, shareReplay, take, startWith, scan, map } from 'rxjs/operators';
import { Subject, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit {
  loadMore$ = new Subject<any>();
  height$ = new Subject<number>();
  blocks$: Observable<BlockHeader[]>;

  get generatorLength(): number {
    switch (this._screen.size) {
      case ScreenSize.XS:
      case ScreenSize.SM:
        return 8;
      case ScreenSize.MD:
      case ScreenSize.LG:
        return 18;
      default:
        return 40;
    }
  }

  get visibleColumns(): string[] {
    return this._screen.size <= ScreenSize.SM
      ? ['height', 'generator', 'transactionsCount']
      : ['height', 'generator', 'size', 'transactionsCount'];
  }

  constructor(private _publicNode: LtoPublicNodeService, private _screen: ScreenService) {
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
  }

  ngOnInit() {}

  more() {
    this.loadMore$.next();
  }
}
