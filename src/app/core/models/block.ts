export class Block {
  static fromJSON(data: LTO.API.Block[]): Block[];
  static fromJSON(data: LTO.API.Block): Block;
  static fromJSON(data: LTO.API.Block | LTO.API.Block[]): Block | Block[] {
    if (Array.isArray(data)) {
      return data.map(blockData => new Block(blockData));
    }
    return new Block(data);
  }

  protected constructor(protected _apiData: LTO.API.Block) {}
}
