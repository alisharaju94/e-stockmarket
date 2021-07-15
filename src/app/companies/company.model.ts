export class Company {
  public comCode: string;
  public name: string;
  public ceo: string;
  public turnOver: string;
  public currencyCode: string;
  public stockExchange: string;
  public url: string;

  constructor(
    comCode: string,
   name: string,
   ceo: string,
   turnOver: string,
   currencyCode: string,
   stockExchange: string,
   url: string
  ) {
    this.comCode = comCode;
    this.name = name;
    this.ceo = ceo;
    this.turnOver = turnOver;
    this.currencyCode = currencyCode;
    this.stockExchange = stockExchange;
    this.url = url;
  }
}
