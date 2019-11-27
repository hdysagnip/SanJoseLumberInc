import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-manage-transaction',
  templateUrl: './manage-transaction.component.html',
  styleUrls: ['./manage-transaction.component.css']
})
export class ManageTransactionComponent implements OnInit {

  private products:Product[];

  constructor(private productService:ProductService) { }

  getProducts(){
    this.productService.getProducts().subscribe((data) => {
        this.products = data;
      }
    );
  }

  ngOnInit() {
    this.getProducts();
  }

}
