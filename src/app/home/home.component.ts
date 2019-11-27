import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users:User[];
  private uN:String;
  private pW:String;
  model: User={
    username:"admin",
    password: "admin"
  };

  loginForm: FormGroup;
  returnUrl: string;
  message: string;

  constructor(private userService:UserService, private router:Router, private formBuilder: FormBuilder, public authService: AuthService) { }

  // getUsers(){
  //   this.userService.getUsers().subscribe((data) => {
  //       this.users = data;
  //     }
  //   );
  // }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/manage-product';
    this.authService.logout();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  compare() {
    //const user = new User();
    // user.username = this.uN;
    // user.password = this.pW;

    // this.userService.compare(user).subscribe((data) =>{
        // console.log(data);
        // this.getUsers();
    //   }
    // );

    // if(user.username==this.un){
    //   this.router.navigate(['/manage-product']);
    //   console.log(this.un);
    // }

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return this.message = "Please check your username and password";
      console.log("Login unsuccessful");
  }
  else{
    if(this.f.username.value == this.model.username && this.f.password.value == this.model.password){
      console.log("Login successful");
    //  this.authService.authLogin(this.model);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', this.f.username.value);
      this.router.navigate([this.returnUrl]);
    }
    else if(this.f.username.value == "" || this.f.password.value == ""){
      this.message = "Please check your username and password";
      console.log("Please check your username and password");
    }
    else{
      this.message = "Please check your username and password";
    }
  }    
}
}
