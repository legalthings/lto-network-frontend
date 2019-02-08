import { Component, OnInit, Input } from '@angular/core';
import { Transaction, TransactionType } from '@app/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  transactionsType: TransactionType | null = null;

  @Input()
  transactions!: Transaction[];

  get columns(): string[] | null {
    switch (this.transactionsType) {
      case TransactionType.TRANSFER:
      case TransactionType.LEASING:
        return ['id', 'fee', 'timestamp', 'sender', 'recipient', 'amount'];
      case TransactionType.MASS_TRANSFER:
        return ['id', 'fee', 'timestamp', 'sender', 'total_amount'];
      case TransactionType.CANCEL_LEASING:
        return ['id', 'fee', 'timestamp', 'sender', 'leasing'];
      case TransactionType.ANCHOR:
      case TransactionType.ANCHOR_NEW:
        return ['id', 'fee', 'timestamp', 'sender'];
      default:
        return ['id', 'sender', 'amount'];
    }

    return null;
  }

  constructor() {}

  ngOnInit() {}
}
