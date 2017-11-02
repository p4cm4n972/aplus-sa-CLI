import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail.component',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ ProductService ]
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    console.log('INIT detail');
    let id = +this._route.snapshot.paramMap.get('id');
    this.getProductDetail(id);
  }

  getProductDetail(id: number) {
    this._productService.getProductDetail(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/product']);
  }
}
