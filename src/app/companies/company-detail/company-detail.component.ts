import { StockmarketService } from './../../shared/stockmarket.service';
import { Company } from './../company.model';
import { CompanyService } from './../company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  code : string = null;
  selectedCompany: Company = null;
  constructor(
    private companyService: CompanyService,
    private stockMarketService: StockmarketService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.code = params['code'];
      this.selectedCompany = this.companyService.getCompany(this.code);
    });
  }

  onSubmit(form) {
    this.stockMarketService.getStocksFortheRange(
      this.code,
      form.value.start,
      form.value.end
    ).subscribe();
  }
}
