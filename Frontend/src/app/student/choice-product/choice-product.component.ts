import { ProductsService } from './../services/products/products.service';
import { Component, OnInit,  } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-choice-product',
  templateUrl: './choice-product.component.html',
  styleUrls: ['./choice-product.component.css']
})
export class ChoiceProductComponent implements OnInit {

  /**
   * categories 
   */
  private products: object[];

  constructor(public service:ProductsService) { }

  /**
   * iniialize vars
   */
  ngOnInit() {
    this.fillProducts();
  }

  /**
   * fill products 
   */
  fillProducts() {
    this.products = [ {id:1,'name':'name'},{id: 2, 'name':'name2'} ];
  }


}
