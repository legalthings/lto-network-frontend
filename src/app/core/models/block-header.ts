export class BlockHeader {
  static fromJSON(apiData: LTO.API.BlockHeader[]): BlockHeader[];
  static fromJSON(apiData: LTO.API.BlockHeader): BlockHeader;
  static fromJSON(apiData: LTO.API.BlockHeader | LTO.API.BlockHeader[]): BlockHeader | BlockHeader[] {
    if (Array.isArray(apiData)) {
      return apiData.map(headerData => new BlockHeader(headerData));
    }

    return new BlockHeader(apiData);
  }

  protected constructor(protected _apiData: LTO.API.BlockHeader) {}
}
