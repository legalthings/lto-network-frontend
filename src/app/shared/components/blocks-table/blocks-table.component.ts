import { Component, OnInit, Input } from '@angular/core';
import { ScreenService, ScreenSize, BlockHeader } from '@app/core';

@Component({
  selector: 'app-blocks-table',
  templateUrl: './blocks-table.component.html',
  styleUrls: ['./blocks-table.component.scss']
})
export class BlocksTableComponent implements OnInit {
  @Input() blocks!: BlockHeader[];

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

  constructor(private _screen: ScreenService) {}

  ngOnInit() {}
}
