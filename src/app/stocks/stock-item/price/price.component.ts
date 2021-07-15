import { PriceItem } from './../../../shared/price-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
@Input() item: PriceItem;
  constructor() { }

  ngOnInit(): void {
  }

}
