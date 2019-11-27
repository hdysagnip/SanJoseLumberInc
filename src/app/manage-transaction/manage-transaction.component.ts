import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-manage-transaction',
  templateUrl: './manage-transaction.component.html',
  styleUrls: ['./manage-transaction.component.css']
})
export class ManageTransactionComponent implements OnInit {

  public products:Product[];

  constructor(private productService:ProductService) { }

  getProducts(){
    this.productService.getProducts().subscribe((data) => {
        this.products = data;
      }
    );
  }

  orders = [];
  price = [];
  total = 0;
  payment = 0;
  change = 0;
  
  add(product){
    if(this.orders.includes(product)){
      product.quantity += 1;
      product.total = product.price * product.quantity;
    }else{
      this.orders.push(product);
      product.total = product.price;
    }
    this.price.push(product.price);
    this.total = this.price.reduce((x, y) => x + y, 0) 
  }

  new(){
    this.orders.length = 0;
    this.orders = [];
    this.price.length = 0;
    this.total = 0;
    this.payment = 0;
    this.change = 0;
  }

  ngOnInit() {
    this.getProducts();
  }

}
