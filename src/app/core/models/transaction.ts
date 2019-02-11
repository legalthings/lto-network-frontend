export class Transaction {
  static fromJSON(apiData: LTO.API.Transaction[]): Transaction[];
  static fromJSON(apiData: LTO.API.Transaction): Transaction;
  static fromJSON(apiData: LTO.API.Transaction | LTO.API.Transaction[]): Transaction | Transaction[] {
    if (Array.isArray(apiData)) {
      return apiData.map(transactionData => new Transaction(transactionData));
    }
    return new Transaction(apiData);
  }

  get timestamp() {
    return this._apiData.timestamp;
  }

  get fee() {
    return this._apiData.fee;
  }

  get sender() {
    return this._apiData.sender;
  }

  get recipient() {
    return this._apiData.recipient || '';
  }

  get amount() {
    return this._apiData.amount;
  }

  get id() {
    return this._apiData.id;
  }

  get leaseId(): string {
    console.warn('Transaction model; TODO: Add leaseId');
    return '';
  }

  get totalAmount(): number {
    console.warn('Transaction model; TODO: Add totalAmount');
    return 0;
  }

  protected constructor(protected _apiData: LTO.API.Transaction) {}
}
