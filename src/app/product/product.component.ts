import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ ProductService ]

})
export class ProductComponent implements OnInit {
  pageTitle: string = 'Notre Catalogue';
  pageSubTitle01: string = 'Informatique industrielle & Interfaces d\'affichage';
  pageSubTitle02: string = 'Informatique industrielle';
  pageSubTitle03: string = 'Interfaces d\'Interface ';
  imageWidth: number = 150;
  errorMessage: string;


  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product;
  }
  filteredProducts: IProduct[];
  product: IProduct[] = [];

  constructor(private _productService: ProductService) {
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.product.filter((product: IProduct) =>
      product.productPrt.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(nu: string): void {
    this.listFilter = nu;
    console.log(nu);
  }

  ngOnInit(): void {
    console.log('Product');
    this._productService.getProduct()
    .subscribe(product => {
      this.product = product;
      this.filteredProducts = this.product;
      this.listFilter = '';
    },
    error => this.errorMessage = <any>error);
  }

}
