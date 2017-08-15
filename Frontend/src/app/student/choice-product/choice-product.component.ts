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
  private categories: object[];

  constructor(public service:ProductsService) { }

  ngOnInit() {
    this.fillCategories();
  }

  fillCategories() {
    this.categories = [ {id:1,'name':'name'},{id: 2, 'name':'name2'} ];
    
  }

  fillCateg() {
    this.service.getProducts(1).subscribe( (response: Response) => {
      this.categories = response.json();
    });
  }

}
