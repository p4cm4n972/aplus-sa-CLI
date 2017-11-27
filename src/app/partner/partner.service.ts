import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import { IProductOring } from './product-oring';

@Injectable()
export class ProductService {
private _productUrl = '../api/product/catalogue.json';

    constructor ( private _http: HttpClient) { }

    getProduct(): Observable<IProductOring[]> {
        return this._http.get<IProductOring[]>(this._productUrl)
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    getProductDetail(id: number): Observable<IProductOring> {
        return this.getProduct()
        .map((product: IProductOring[]) => product.find(p => p.modele === id ));
    }
    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
