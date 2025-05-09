import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/entityes.type';
import { catchError } from 'rxjs';
import { BACK_END_URL } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);
  products:Product[] = [];

  getProducts()
  {
    const url = BACK_END_URL+'/Product';
    // this.http.get( url ).pipe( catchError( ( err ) =>
    // {
    //   console.log( err );
    //   throw err;
    // } ) ).subscribe( ( result: any ) => this.products = result );
    // return this.products;
    // console.log( 'tghis is the products', this.products );
    return this.http.get<Array<Product>>(url);
  }
}
