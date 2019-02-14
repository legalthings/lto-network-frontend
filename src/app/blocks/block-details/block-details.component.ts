import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LtoPublicNodeService, Block } from '@app/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-block-details',
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
}
