import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  onCompanyLoad: Subject<Company[]> = new Subject();
  private companies: Company[] = [];

  getCompanies() {
    return this.companies.slice();
  }

  setCompanies(companies: Company[]) {
    this.companies = companies;
    this.onCompanyLoad.next(this.companies.slice());
  }

  getCompany(code: String) {
    return this.companies.find((item) => item.comCode === code);
  }
}
