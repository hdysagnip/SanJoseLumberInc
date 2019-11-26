import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  public products:Product[];
  public productName:String;
  public productCat:String;
  public productQty:Number = 0;
  public productPrice:Number = 0;

  constructor(private productService:ProductService) {
 
  }

  getProducts(){
    this.productService.getProducts().subscribe((data) => {
        this.products = data;
      }
    );
  }

  addProduct() {
    const product = new Product();
    product.category = this.productCat;
    product.product_name = this.productName;
    product.quantity= this.productQty;
    product.price = this.productPrice;

    this.productService.addProduct(product).subscribe((data) =>{
        console.log(data);
        this.getProducts();
        alert("Product Added!");
        this.productCat = "";
        this.productName = "";
        this.productQty=0;
        this.productPrice=0;
      }
    );
  }

  updateProduct(id:string){
    if(confirm("Update product info?")){
      const product= new Product();
      product.category = this.productCat;
      product.product_name = this.productName;
      product.quantity= this.productQty;
      product.price = this.productPrice;
      this.productService.updateProduct(product,id).subscribe((data)=>{
        console.log(data);
        this.getProducts();
        alert("Product Updated!");
        this.productCat = "";
        this.productName = "";
        this.productQty=0;
        this.productPrice=0;
        }
      ) 
    }
  }

  deleteProduct(id:string){
    if(confirm("Update product info?")){
      this.productService.deleteProduct(id).subscribe((data)=>{
        console.log(data);
        this.getProducts();
        alert("Product Deleted!");
        }
      )
      }
  }
  
  ngOnInit() {
    this.getProducts();
  }

}
