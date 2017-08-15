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
  private categories: object[];

  constructor(public service:ProductsService) { }

  /**
   * iniialize vars
   */
  ngOnInit() {
    this.fillProducts();
    this.fillCategories();
  }

  /**
   * fill products 
   */
  fillProducts() {
    this.service.getProducts(1).subscribe( (result: Response) => {
      console.log(result);
        this.products = result.json();
    }); 
  }

  fillCategories() {
    this.service.getCategories(1).subscribe( (result: Response) => {
      console.log(result);
        this.categories = result.json();
    });
  }

}
