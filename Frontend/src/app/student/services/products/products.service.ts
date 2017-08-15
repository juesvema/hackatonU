import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductsService {

  constructor(public http:Http) { }

  /**
   * get products by category
   */
  getProducts(category: number) {
    return this.http.get('urlProduct');
  }
}

