import { Component, Input } from '@angular/core';
import { ScreenService, ScreenSize } from '@lto/common';
import { BlockHeader } from '@lto/core';

@Component({
  selector: 'explorer-blocks-table',
  templateUrl: './blocks-table.component.html',
  styles: []
})
export class BlocksTableComponent {
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

  get dateFormat(): string {
    switch (this._screen.size) {
      case ScreenSize.XS:
      case ScreenSize.SM:
        return 'shortDate';
      case ScreenSize.MD:
      case ScreenSize.LG:
        return 'short';
      default:
        return 'medium';
    }
  }

  get visibleColumns(): string[] {
    return this._screen.size <= ScreenSize.SM
      ? ['height', 'generator', 'transactionsCount']
      : ['height', 'generator', 'timestamp', 'transactionsCount'];
  }

  constructor(private _screen: ScreenService) {}
}
