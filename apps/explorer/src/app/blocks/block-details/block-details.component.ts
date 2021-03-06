import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LtoPublicNodeService, Block, TransactionType } from '@lto/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'explorer-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss']
})
export class BlockDetailsComponent implements OnInit {
  block$: Observable<Block>;

  constructor(private _route: ActivatedRoute, private _publicNode: LtoPublicNodeService) {
    this.block$ = _route.params.pipe(
      map(params => params.blockId),
      switchMap(blockId => _publicNode.block(blockId))
    );
  }

  ngOnInit() {}

  getTransactionName(type: TransactionType): string {
    switch (type) {
      case TransactionType.TRANSFER:
        return 'Transfer';
      case TransactionType.LEASE:
        return 'Lease';
      case TransactionType.CANCEL_LEASE:
        return 'Lease cancel';
      case TransactionType.DATA:
      case TransactionType.ANCHOR:
        return 'Anchors';
      case TransactionType.INVOKE_ASSOCIATION:
        return 'Invoke association';
      case TransactionType.REVOKE_ASSOCIATION:
        return 'Revoke association';
    }

    return '';
  }
}
