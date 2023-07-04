import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  

  constructor(private login:LoginserviceService,private router:Router){}

  ngOnInit(){
    
    const islogedin=  this.login.isLoggedIn();
    if(islogedin==true){
      this.router.navigate(['/actualcart']);
    }
    
  }

}
