import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import{ActivatedRoute,Router,ParamMap} from '@angular/router'; 
import { AuthService } from '../auth.service';

@Component({
selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  private products:Product[];
  private productName:String;
  private productCat:String;
  private productQty:Number = 0;
  private productPrice:Number = 0;
  
  id:String;  
  constructor(private productService:ProductService, privateroute:ActivatedRoute, private router:Router, public authService: AuthService) {
 
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
  //public uN;
  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.getProducts();
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
