import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import { IProduct } from './product';

@Injectable()
export class ProductService {
private _productUrl = '../api/product/product.json';

    constructor ( private _http: HttpClient) { }

    getProduct(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    getProductDetail(id: number): Observable<IProduct> {
        return this.getProduct()
        .map((product: IProduct[]) => product.find(p => p.productId === id ));
    }
    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}