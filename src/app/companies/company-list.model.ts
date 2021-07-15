import { Company } from './company.model';

export class CompanyList {
  public companies: Company[];

  constructor(companies: Company[]) {
    this.companies = companies;
  }
}
