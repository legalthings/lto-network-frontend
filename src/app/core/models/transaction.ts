export class Transaction {
  static fromJSON(apiData: LTO.API.Transaction[]): Transaction[];
  static fromJSON(apiData: LTO.API.Transaction): Transaction;
  static fromJSON(apiData: LTO.API.Transaction | LTO.API.Transaction[]): Transaction | Transaction[] {
    if (Array.isArray(apiData)) {
      return apiData.map(transactionData => new Transaction(transactionData));
    }
    return new Transaction(apiData);
  }

  protected constructor(protected _apiData: LTO.API.Transaction) {}
}
