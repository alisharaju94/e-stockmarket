import { Company } from './../../company.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() item: Company;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
