import { Subscription } from 'rxjs';
import { CompanyService } from './../company.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companies: Company[];
  subscription: Subscription;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    setTimeout(() => {
      this.companies = this.companyService.getCompanies();
    }, 200);
    this.subscription = this.companyService.onCompanyLoad.subscribe(
      (companies) => (this.companies = companies)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
