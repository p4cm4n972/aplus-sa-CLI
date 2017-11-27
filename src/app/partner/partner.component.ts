import { Component, OnInit } from '@angular/core';

import { IProductOring } from './product-oring';
import { Partner } from './partner';
import { PARTNER } from './mock-partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  partner = PARTNER;
  constructor() { }

  ngOnInit() {
  }

}
