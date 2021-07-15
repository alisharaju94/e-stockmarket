import { PriceItem } from './price-item.model';

export class StockRangeDetails {
  public minPrice: number;
  public maxPrice: number;
  public avgPrice: number;
  public currencyCode: String;
  public priceList: PriceItem[];

  constructor(
    minPrice: number,
    maxPrice: number,
    avgPrice: number,
    currencyCode: String,
    priceList: PriceItem[]
  ) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.avgPrice = avgPrice;
    this.currencyCode = currencyCode;
    this.priceList = priceList;
  }
}
